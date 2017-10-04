class EspecieView{
    
        constructor(element){
            this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource';
        }


        _effects(modelName){

            let setas = document.querySelectorAll(`.glyphicon-triangle-bottom`);
            let setasArr = Array.from(setas);

            setasArr.map(seta=>{
                seta.addEventListener('click', function (e) {
                    let element = e.target;
                    let tbody = element.parentNode.parentNode.querySelector('tbody');
                    tbody.classList.toggle('invisible');
                });
            });
        }

        loadTables(modelsNames){

            /*let lista = [{idDorso: 1, descCorDorso: "Marrom"},
            {idDorso: 2, descCorDorso: "Marrom-acinzentado"},
            {idDorso: 3, descCorDorso: "Marrom-acinzentado escuro com machas escuras"},
            {idDorso: 4, descCorDorso: "Marrom-amarelado"},
            {idDorso: 5, descCorDorso: "Marrom-esverdeado"},
            {idDorso: 6, descCorDorso: "Cinza-azulado"},
            {idDorso: 7, descCorDorso: "Azul escuro"},
            {idDorso: 8, descCorDorso: "Azul-acinzentado"},
            {idDorso: 9, descCorDorso: "Cinza"}]*/

            
            /*for (var modelName of modelsNames) {
                let modelNameFirstUpper = modelName.replace(modelName.charAt(0),modelName.charAt(0).toUpperCase());
                //let list = JSON.parse(Conn.conect(this._resourceUrl+modelNameFirstUpper,'GET', null,'text/plain')[2]);
                let list = lista;
                this._createSelects(modelName, document.querySelector(`#${modelName}-select-div`));
                this._loadItens(document.querySelector(`#${modelName}-select-lista`), list);
                this._pages(()=>document.querySelectorAll(".select-table tr:not(.tr-paginator)"),totalPages);
            }*/


            /*for (var modelName of modelsNames) {
                let modelNameFirstUpper = modelName.replace(modelName.charAt(0),modelName.charAt(0).toUpperCase());
                let list = JSON.parse(Conn.conect(this._resourceUrl+modelNameFirstUpper,'GET', null,'text/plain')[2]);
                console.log(list);
                this._createSelects(modelName, document.querySelector(`#${modelName}-select-div`));
                this._loadItens(document.querySelector(`#${modelName}-select-lista`), list);
                this._pages(document.querySelector(`.select-table`));
            }*/

            

            let type = 'Dorso';
            let totalItens = Conn.conect(this._resourceUrl+'/qtd/'+'Dorso','GET', null,'text/plain')[2];            
            let maxResults = 3;
            let firstResults = 0;
            let page = 1;
            let uri = `${this._resourceUrl}/${type}/${maxResults}/${firstResults}`;
            let callBack = ()=>{ return JSON.parse(Conn.conect(uri,'GET', null,'text/plain')[2])};

            new SelectPaginator('Dorso',document.querySelector('#dorso-select-div'), callBack, true, totalItens, page, maxResults);
            
        }


        _loadItens(element, list, container = 'tbody'){
            Util.appendHtml(element, 
                list.map(item=>{
                    return `
                        <tr>
                            <td class="select-item">
                                <input type="radio" value="${item[Object.keys(item)[0]]}">
                            </td>
                            <td>${item[Object.keys(item)[1]]}</td>
                        </tr> `
                }),
                container
            )
        }

        _createSelects(modelName, element){
            let modelNameFirstUpper = modelName.replace(modelName.charAt(0),modelName.charAt(0).toUpperCase());
            Util.appendHtml(element, 
                `<span>${modelNameFirstUpper}:</span>  
                 <table class="select-table table table-bordered">
                    <caption class="info">${modelNameFirstUpper}
                        <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </caption>
                    <tbody id="${modelNameFirstUpper.toLowerCase()}-select-lista" class="invisible body-table-selecet"></tbody>
                 </table>`,
                'div'
            )
        }

        _pages(selecetTrs, totalItens){

            console.log(totalItens);

            let box = paginator({
                get_rows: selecetTrs,
                table: document.querySelector(".select-table")[0],
                rows_per_page: 3,
                box_mode: "list",
                page_options : false,
                span_infos: false,
                total_items: totalItens,
            });

            let trPaginator = `<tr class="tr-paginator"></tr>`;

            box.className = "box";
            Util.appendHtml( document.querySelector('.body-table-selecet'), trPaginator, 'tbody');
            document.querySelector('.tr-paginator').appendChild(box);

            //this._changePages();
        }

        _changePages(){

            let pages = document.querySelectorAll('ul.pagination li');

            //console.log(pages);

            for(var index = 0; index < pages.length; index++) {
                pages[index].addEventListener('click', (event)=>{
                    
                    console.log(event.target);
                    console.log('teste');
                })
            }
        }
    }
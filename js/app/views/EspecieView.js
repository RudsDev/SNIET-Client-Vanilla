class EspecieView{
    
        constructor(element){
            this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource/';
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
            for (var modelName of modelsNames) {
                let modelNameFirstUpper = modelName.replace(modelName.charAt(0),modelName.charAt(0).toUpperCase());
                let list = JSON.parse(Conn.conect(this._resourceUrl+modelNameFirstUpper,'GET', null,'text/plain')[2]);
                this._createSelects(modelName, document.querySelector(`#${modelName}-select-div`));
                this._loadItens(document.querySelector(`#${modelName}-select-lista`), list);
                this._pages(list);
            }
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
                 <table class="select-table table table-striped table-bordered">
                    <caption class="info">${modelNameFirstUpper}
                        <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </caption>
                    <tbody id="${modelNameFirstUpper.toLowerCase()}-select-lista" class="invisible body-table-selecet"></tbody>
                 </table>`,
                'div'
            )
        }

        _pages(list){
            console.log(list.length);
        }
    }
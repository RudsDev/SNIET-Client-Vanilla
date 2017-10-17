
class SelectPaginator {

    /**
     * @param {string} itemName - Nome utilizado na exibição do elemento.
     * @param {HTMLDivElement} container - Div em que o select-paginator será rendereizado.
     * @param {Array} firstTrs - Listagem dos elements <tr> que irão popular a primeira página.
     * 
     * @param {Object} requestInfos - Objeto literal personalizavel com informações para realizar a requisição que popula as páginas.
     * @param {string} requestInfos.itemName - Obrigatório. Nome utilizado na exibição do elemento.
     * @param {string} requestInfos.resourceUri - Obrigatório. URI do resource para a qual será feito o request.
     * @param {integer} requestInfos.rowsPerPage - Obrigatório. Quantidade de <tr> por página.
     * @param {integer} requestInfos.totalItens - Obrigatório. Total de elementos que estarão presentes no select-paginator.
     * @param {Array} requestInfos.pathModel - Obrigatório. Array com strings ordenadas de modo a reproduzir o path do resource que preenche as trs.
     */
    constructor(container, firstTrs, requestInfos){

        this._rqInf = requestInfos;

        this._createSelectPaginator(this._rqInf.itemName,container);
        this._createTrs(document.querySelector(`#${this._rqInf.itemName.toLowerCase()}-select-lista`),firstTrs);
        
        Paginator.request = this._request
        
        this._pagesRequest(()=>document.querySelectorAll(`#select-table-${this._rqInf.itemName.toLocaleLowerCase()} tr:not(.tr-paginator)`), this._rqInf.itemName,this._rqInf.totalItens, 0, this._rqInf.rowsPerPage, this._createTrs);        
    }

    /**
     * Cria o elemento select-paginator.
     * 
     * @param {string} itemName - Nome utilizado na exibição do elemento.
     * @param {HTMLDivElement} container - Div em que o select-paginator será rendereizado.  
     */
    _createSelectPaginator(itemName, container){
        let itemNameFirstUpper = itemName.replace(itemName.charAt(0),itemName.charAt(0).toUpperCase());
        Util.appendHtml(container, 
            `<span>${itemNameFirstUpper}:</span>  
            <table id="select-table-${itemName.toLocaleLowerCase()}" class="select-table table table-bordered">
                <caption class="info">${itemNameFirstUpper}
                    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </caption>
                <tbody id="${itemNameFirstUpper.toLowerCase()}-select-lista" class="invisible body-table-selecet"></tbody>
            </table>`,
            'div'
        )
    }



    /**
     * Cria as <tr> do select-paginator.
     * Customize para exibir os dados desejados.
     * 
     * @param {HTMLTableElement} tbody - Tag <tbody> .
     * @param {Array} list - Array contendo JSON utilizado para popular as <tr>.
     */
    _createTrs(tbody, list = new Array()){

        console.log('_createTrs');

        Util.appendHtml(tbody, 
                list.map(item=>{
                    return `
                        <tr>
                            <td class="select-item">
                                <input type="radio" name="selected-item" value="${item[Object.keys(item)[0]]}">
                            </td>
                            <td>${item[Object.keys(item)[1]]}</td>
                        </tr> `
                }),'tbody');
            
        this._selectItem();
    }



    /**
     * Cria a paginação do select-paginator.
     * A paginação realiza requests para preencher trs que estejam vazias.
     * @param {} trs - .
     * @param {integer} totalItens - Total de elementos que estarão presentes no select-paginator.
     * @param {integer} page - Número da página a ser exibida.
     * @param {integer} rowsPerPage - Quantidade de <tr> por página.
     */
    _pagesRequest(trs, itemName,totalItens,page,rowsPerPage, callBack){
        let box = Paginator.init({
            get_rows: trs,
            table: document.querySelector(`#select-table-${itemName.toLocaleLowerCase()}`)[0],
            rows_per_page: rowsPerPage,
            page: page,
            box_mode: "list",
            page_options : false,
            span_infos: false,
            total_items: totalItens,
            function_request: callBack
        });

        let trPaginator = `<tr class="tr-paginator"></tr>`;
        let tbody = document.querySelector(`#${itemName.toLocaleLowerCase()}-select-lista`);

        box.className = "box";
        Util.appendHtml(tbody, trPaginator, 'tbody');

        

        document.querySelector('.tr-paginator').appendChild(box);
        this._loadNextPage();
    }

    _request(page){
        let resourceUrl = this._resourceUrl;
        let itemName = this._itemName;    
        let maxResults = this._rowsPerPage;
        let firstResults = page;
        let uri = this._mountURI();

        return JSON.parse(Conn.conect(uri,'GET', null,'text/plain')[2]);
    }

    _loadNextPage(){
        Paginator.request = ()=>{
            if(!this._trsExists())
            this._createTrs(Paginator.page.parent, this._request(Paginator.page.pageNumber));
            this._insertPaginator(Paginator.page.parent);
        };
    }


    _mountURI(){

        this._rqInf.page = Paginator.page.pageNumber;
        let path = [];

        for (let key in this._rqInf) {
            for(let value of this._rqInf.pathModel){
                if(key.search(value)===0){
                    path.push(this._rqInf[key]);
                }    
            }
        }
        return this._rqInf.resourceUri+'/'+path.join('/');
    }


    /**
     * Verifica se todas as <tr> possiveis já foram renderizadas no selectPaginator.
     */
    _trsExists(){
        let select = Paginator.page.parent;
        let qtdTrs = select.querySelectorAll('tr').length-1;
        return qtdTrs>=this._rqInf.totalItens;
    }


    /**
     * Assegura que a <tr> com a paginação será sempre a ultima da listagem.
     */
    _insertPaginator(tbody){

        let trs = tbody.querySelectorAll('tr');
        let paginator = undefined;

        for (var index = 0; index < trs.length; index++) {
            if(trs[index].classList.value=='tr-paginator'){
                paginator = trs[index];
                trs[index].remove();
                break;
            }
        }
        tbody.appendChild(paginator);
    }

    _selectItem(){

        console.log('_selectItem');

        let trs = document.querySelectorAll('tbody.body-table-selecet tr:not(.tr-paginator)');

        console.log(trs);

        for (var index = 0; index < trs.length; index++) {
            
            let item = trs[index];

            //console.log(item);

            item.removeEventListener('click',this._selectItemAction);
            item.addEventListener('click',this._selectItemAction);
            
        }
    }


    _selectItemAction(event){

        let itemSelected = event.currentTarget;
        let radio = itemSelected.querySelector('input[name=selected-item]');

        //radio.checked = true;

        //console.log(document.querySelector(itemSelected));

        console.log(radio);
        console.log(itemSelected);
    }
}
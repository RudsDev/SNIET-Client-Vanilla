
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
    constructor(requestInfos){

        Paginator.request = this._request;

        this._rqInfs = requestInfos;

        //Foreach que apenas criará todas os select-paginator.   
        this._rqInfs.forEach(function(element) {
            this._createSelectPaginator(element.itemName,element.container); 
            let tbody = document.querySelector(`tbody#${element.itemName.toLowerCase()}-select-lista`);
            this._createTrs(element.itemName, tbody, element.callBack());
            this._insertPaginator(tbody);
        }, this);

        this._effects();
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
            <table id="select-table-${itemName.toLocaleLowerCase()}" class="select-table table table-bordered" data-item="${itemName}">
                <caption class="info">
                    <span class="selected-value">${itemNameFirstUpper}</span>
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
    _createTrs(itemName, tbody, list = new Array()){

        Util.appendHtml(tbody, 
                list.map(item=>{
                    return `
                        <tr>
                            <td class="select-item">
                                <input type="radio" class="item-id" name="selected-item-${itemName}" value="${item[Object.keys(item)[0]]}">
                            </td>
                            <td class="item-value disable-select">${item[Object.keys(item)[1]]}</td>
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
    _createPaginator(rqInfo){

        return Paginator.init({
            get_rows: ()=>document.querySelectorAll(`#select-table-${rqInfo.itemName.toLocaleLowerCase()} tr:not(.tr-paginator)`),
            table: document.querySelector(`#select-table-${rqInfo.itemName}`)[0],
            rows_per_page: rqInfo.rowsPerPage,
            page: rqInfo.page,
            box_mode: "list",
            page_options : false,
            span_infos: false,
            total_items: rqInfo.totalItens,
            function_request: rqInfo.callBack,
        });
    }

    /**
     * Assegura que a <tr> com a paginação será sempre a ultima da listagem.
     */
    _insertPaginator(tbody){

        let tdby = tbody;
        let trs = tdby.querySelectorAll('tr');
        let paginator = tdby.querySelector('tr.tr-paginator');

        if(paginator==null){

            let element = this._getInfos(tbody.parentNode.dataset['item']);
            let trPaginator = `<tr class="tr-paginator"></tr>`;

            Util.appendHtml(tdby, trPaginator, 'tbody');
            tdby.querySelector('.tr-paginator').appendChild(this._createPaginator(element));

            this._loadNextPage(element, this);
        }
        else{
            for (var index = 0; index < trs.length; index++) {
                if(trs[index].classList.value=='tr-paginator'){
                    paginator = trs[index];
                    trs[index].remove();
                    tdby.appendChild(paginator);
                    break;
                }
            }
        }
    }

    _request(element, page){
        let uri = this._mountURI(element);
        return JSON.parse(Conn.conect(uri,'GET', null,'text/plain')[2]);
    }

    _loadNextPage(elemento, context){
        Paginator.request = function(){
            if(!context._trsExists(context._getInfos(Paginator.page.parent.parentNode.dataset['item']))){
                let element = context._getInfos(Paginator.page.parent.parentNode.dataset['item']);
                let list = context._request(element, Paginator.page.pageNumber);
                context._createTrs(elemento,document.querySelector(`tbody#${element.itemName.toLowerCase()}-select-lista`), list);
                context._insertPaginator(Paginator.page.parent);
            }
        };
    }

    /**
     * Monta a URI de acordo com o que foi definido através do parâmetro 'requestInfos.pathModel' no construtor.
     */
    _mountURI(element){
        
        element.page = Paginator.page.pageNumber;
        let path = [];

        for (let key in element) {
            for(let value of element.pathModel){
                if(key.search(value)===0){
                    path.push(element[key]);
                }    
            }
        }
        return element.resourceUri+'/'+path.join('/');
    }

    /**
     * Verifica se todas as <tr> possiveis já foram renderizadas no selectPaginator.
     */
    _trsExists(element){
        let select = Paginator.page.parent.parentNode;
        let qtdTrs = select.querySelectorAll('tr').length-1;
        return qtdTrs>=element.totalItens;
    }

    _selectItem(){

        let trs = document.querySelectorAll('tbody.body-table-selecet tr:not(.tr-paginator)');

        for (var index = 0; index < trs.length; index++) {
            
            let item = trs[index];

            item.removeEventListener('click',this._selectItemAction);
            item.addEventListener('click',this._selectItemAction);
            
        }
    }

    _selectItemAction(event){

        let trSelected = event.currentTarget;
        let selectedValue = trSelected.querySelector('td.item-value');
        let table = trSelected.parentNode.parentNode;
        let caption = table.querySelector('caption span.selected-value');
        let seta = table.querySelector('caption span.glyphicon');
        let radio = trSelected.querySelector('.item-id');

        //recolhe o menu de seleção ao se escolher um item.
        seta.click();

        radio.checked = true;

        caption.innerText = selectedValue.innerText;
    }

    _effects(modelName){

        let setas = document.querySelectorAll(`.glyphicon-triangle-bottom`);
        let setasArr = Array.from(setas);

        setasArr.map(seta=>{
            seta.removeEventListener('click', this._eventShowSelect);
            seta.addEventListener('click', this._eventShowSelect);
        });
    }

    _eventShowSelect (event) {
        let element = event.target;
        let tbody = element.parentNode.parentNode.querySelector('tbody');
        tbody.classList.toggle('invisible');
    }

    _getInfos(itemName){

        let infos = undefined;

         this._rqInfs.forEach(function(element) {
             if(element.itemName==itemName){
                 infos = element;
             }
         }, this);
         return infos;
    }
    
}
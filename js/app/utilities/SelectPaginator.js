
class SelectPaginator {

    /**
     * @param {string} itemName - Nome utilizado na exibição do elemento.
     * @param {HTMLDivElement} container - Div em que o select-paginator será rendereizado.
     * @param {Function} callback - Função que será utilizada para recurepar os dados que das <tr>.
     * @param {integer} totalItens - Total de elementos que estarão presentes no select-paginator.
     * @param {integer} page - Número da página a ser exibida.
     * @param {integer} rowsPerPage - Quantidade de <tr> por página.
     */
    constructor(itemName, container, callBack, request=true, totalItens,page,rowsPerPage){

        this._createSelectPaginator(itemName,container);

        if(request){
            console.log(itemName);
            console.log(document.querySelector(`#${itemName}-select-lista`));
            this._createTrs(document.querySelector(`#${itemName.toLowerCase()}-select-lista`),callBack());
        }
        this._pagesRequest(()=>document.querySelectorAll(".select-table tr:not(.tr-paginator)"),totalItens, page, rowsPerPage);
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
            <table class="select-table table table-bordered">
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

        console.log(list);

        Util.appendHtml(tbody, 
            list.map(item=>{
                return `
                    <tr>
                        <td class="select-item">
                            <input type="radio" value="${item[Object.keys(item)[0]]}">
                        </td>
                        <td>${item[Object.keys(item)[1]]}</td>
                    </tr> `
            }),
            'tbody'
        )
    }



    /**
     * Cria a paginação do select-paginator.
     * A paginação realiza requests para preencher trs que estejam vazias.
     * @param {} trs - .
     * @param {integer} totalItens - Total de elementos que estarão presentes no select-paginator.
     * @param {integer} page - Número da página a ser exibida.
     * @param {integer} rowsPerPage - Quantidade de <tr> por página.
     */
    _pagesRequest(trs,totalItens,page,rowsPerPage){
        
        console.log(totalItens);

        let box = paginator({
            get_rows: trs,
            table: document.querySelector(".select-table")[0],
            rows_per_page: rowsPerPage,
            page: page,
            box_mode: "list",
            page_options : false,
            span_infos: false,
            total_items: totalItens,
        });

        let trPaginator = `<tr class="tr-paginator"></tr>`;

        box.className = "box";
        Util.appendHtml( document.querySelector('.body-table-selecet'), trPaginator, 'tbody');
        document.querySelector('.tr-paginator').appendChild(box);
    }
}





/*function loadTables(itensTable){

    let totalPages = Conn.conect(this._resourceUrl+'qtd/'+'Dorso','GET', null,'text/plain');

    for (var itemTable of itensTable) {
        let itemTableFirstUpper = itemTable.replace(itemTable.charAt(0),itemTable.charAt(0).toUpperCase());
        let list = JSON.parse(Conn.conect(this._resourceUrl+itemTableFirstUpper,'GET', null,'text/plain')[2]);
        this.createSelectPaginator(itemTable, document.querySelector(`#${itemTable}-select-div`));
        this._loadItens(document.querySelector(`#${itemTable}-select-lista`), list);
        this._pages();
    }
}*/



/**
 * Cria o elemento select-paginator.
 * 
 * @param {string} itemName - Nome utilizado na exibição do elemento.
 * @param {HTMLDivElement} container - Div em que o select-paginator será rendereizado.  
 */
/*function _createSelectPaginator(itemName, container){
    let itemNameFirstUpper = itemName.replace(itemName.charAt(0),itemName.charAt(0).toUpperCase());
    Util.appendHtml(container, 
        `<span>${itemNameFirstUpper}:</span>  
         <table class="select-table table table-bordered">
            <caption class="info">${itemNameFirstUpper}
                <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
            </caption>
            <tbody id="${itemNameFirstUpper.toLowerCase()}-select-lista" class="invisible body-table-selecet"></tbody>
         </table>`,
        'div'
    )
}*/



/**
 * Cria as <tr> do select-paginator.
 * Customize para exibir os dados desejados.
 * 
 * @param {HTMLTableElement} table - Tag <tbody> .
 * @param {} list - Array contendo JSON utilizado para popular as <tr>.
 */
/*function _loadItens(tbody, list){
    Util.appendHtml(tbody, 
        list.map(item=>{
            return `
                <tr>
                    <td class="select-item">
                        <input type="radio" value="${item[Object.keys(item)[0]]}">
                    </td>
                    <td>${item[Object.keys(item)[1]]}</td>
                </tr> `
        }),
        'tbody'
    )
}*/



/**
 * Cria a paginação do select-paginator.
 * 
 */
/*function _pages(){

    console.log(totalItens);

    let box = paginator({
        get_rows: ()=>document.querySelectorAll(".select-table tr:not(.tr-paginator)"),
        table: document.querySelector(".select-table")[0],
        rows_per_page: 3,
        box_mode: "list",
        page_options : false,
        span_infos: false,
    });

    let trPaginator = `<tr class="tr-paginator"></tr>`;

    box.className = "box";
    Util.appendHtml( document.querySelector('.body-table-selecet'), trPaginator, 'tbody');
    document.querySelector('.tr-paginator').appendChild(box);

    //this._changePages();
}*/



/**
 * Cria a paginação do select-paginator.
 * A paginação realiza requests para preencher trs que estejam vazias.
 * 
 * @param {HTMLTableElement} table - Tag <tbody> .
 * @param {} list - Array contendo JSON utilizado para popular as <tr>.
 */
/*function _pagesRequest(trs,totalItens,page,rowsPerPage){
    
    console.log(totalItens);

    let box = paginator({
        get_rows: trs,
        table: document.querySelector(".select-table")[0],
        rows_per_page: rowsPerPage,
        page: page,
        box_mode: "list",
        page_options : false,
        span_infos: false,
        total_items: totalItens,
    });

    let trPaginator = `<tr class="tr-paginator"></tr>`;

    box.className = "box";
    Util.appendHtml( document.querySelector('.body-table-selecet'), trPaginator, 'tbody');
    document.querySelector('.tr-paginator').appendChild(box);

}*/



/**
 * @param selecetTrs - Array of
 * @param totalIten -  
 */
/*function _pages(selecetTrs, totalItens){

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

}*/
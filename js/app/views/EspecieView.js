class EspecieView{
    
    constructor(element){
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource';
    }

    loadTables(modelsNames){

        modelsNames.forEach(function(element) {
            
            let type = element.toLowerCase();
            let totalItens = Conn.conect(this._resourceUrl+'/qtd/'+type,'GET', null,'text/plain')[2];            
            
            let requestInfos ={
                itemName: type,
                resourceUri: this._resourceUrl,
                rowsPerPage: 3,
                totalItens: totalItens,
                page:0,
                pathModel: ['itemName','rowsPerPage','page'],
            }
    
            let list = JSON.parse(Conn.conect(`${requestInfos.resourceUri}/${requestInfos.itemName}/${requestInfos.rowsPerPage}/${requestInfos.page}`,'GET', null,'text/plain')[2]);
    
            new SelectPaginator(document.querySelector(`#${type}-select-div`), list, requestInfos);

        }, this);

    }
}
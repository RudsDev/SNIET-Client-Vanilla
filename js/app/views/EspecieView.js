class EspecieView{
    
    constructor(element){
        this._resourceUrl = 'http://localhost:8282/sniet/app/resource';
        this._requestInfos = new Array();
    }

    loadTables(modelsNames){

        modelsNames.forEach(function(element) {
            
            let rqInfo = {
                itemName: element,
                resourceUri: this._resourceUrl,
                rowsPerPage: 3,
                totalItens: Conn.conect(this._resourceUrl+'/qtd/'+element,'GET', null,'text/plain')[2],
                page:0,
                pathModel: ['itemName','rowsPerPage','page'],
                container: document.querySelector(`#${element.toLowerCase()}-select-div`),
                callBack: ()=>{return JSON.parse(Conn.conect(`${rqInfo.resourceUri}/${rqInfo.itemName}/${rqInfo.rowsPerPage}/${rqInfo.page}`,'GET', null,'text/plain')[2]);},
            }

            this._requestInfos.push(rqInfo);
        
        }, this);            


        new SelectPaginator(this._requestInfos);

        

    }
}
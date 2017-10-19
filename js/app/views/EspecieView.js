class EspecieView{
    
    constructor(element){
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource';
    }

    // _effects(modelName){

    //     let setas = document.querySelectorAll(`.glyphicon-triangle-bottom`);
    //     let setasArr = Array.from(setas);

    //     setasArr.map(seta=>{
    //         seta.addEventListener('click', function (e) {
    //             let element = e.target;
    //             let tbody = element.parentNode.parentNode.querySelector('tbody');
    //             tbody.classList.toggle('invisible');
    //         });
    //     });
    // }

    
    loadTables(modelsNames){

        let type = 'Dorso';
        const totalItens = Conn.conect(this._resourceUrl+'/qtd/'+type,'GET', null,'text/plain')[2];            
        
        
        let requestInfos ={
            itemName: type,
            resourceUri: this._resourceUrl,
            rowsPerPage: 3,
            totalItens: totalItens,
            page:0,
            pathModel: ['itemName','rowsPerPage','page'],

        }

        let list = JSON.parse(Conn.conect(`${requestInfos.resourceUri}/${requestInfos.itemName}/${requestInfos.rowsPerPage}/0`,'GET', null,'text/plain')[2]);

        new SelectPaginator(document.querySelector(`#${type.toLowerCase()}-select-div`), list, requestInfos);
    }
}
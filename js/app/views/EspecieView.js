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

        let type = 'Dorso';
        let totalItens = Conn.conect(this._resourceUrl+'/qtd/'+'Dorso','GET', null,'text/plain')[2];            
        let maxResults = 3;
        let firstResults = 0;
        let page = 1;
        let uri = `${this._resourceUrl}/${type}/${maxResults}/${firstResults}`;
        let callBack = ()=>{ return JSON.parse(Conn.conect(uri,'GET', null,'text/plain')[2])};

        new SelectPaginator('Dorso',document.querySelector('#dorso-select-div'), callBack, true, totalItens, page, maxResults, callBack);
        
    }
}
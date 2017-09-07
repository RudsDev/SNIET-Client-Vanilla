class EspecieController{

    constructor() {

        let $ = document.querySelector.bind(document);
        
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource/';

        this._especieView = new EspecieView();

        this._cientificName = $('#name');
        this._extinction = $('#extinct');
        this._description = $('#description');
        this._smallSize = $('#small_size');
        this._midSize = $('#mid_size');
        this._bigSize = $('#big_size');
        this._puppySize =$('#puppy_size');   


        this._selectDorso = $('#dorso-select');
        this._selectFocinho = $('#focinho-select');
        this._selectVentre = $('#ventre-select');
        this._selectReprod = $('#reproducao-select');
        this._selectBarbatana = $('#barbatana-select');
        this._selectDenticao = $('#denticao-select');

        //this._loadData();
        this.load();
    }

    add(event){
        event.preventDefault();
        
        /*Conn.conect('http://localhost:8282/sniet_api/servlet/especies/',
        'POST', ToJson.generateJsonClean(this._createEspecie()),'application/json');*/

        //this.load();

        let obj  = this._selectDorso.value;

        console.log(obj);
    }

    remove(){
        
    }

    update(){
        
    }

    _createEspecie(){
        return new Especie(undefined, this._cientificName.value,
        this._description.value, this._smallSize.value, 
        this._midSize.value, this._bigSize.value,
        this._puppySize.value, this._extinction.value);
    }


    _loadData(){
        this._especieView.loadBarbatana
            (JSON.parse(Conn.conect(this._resourceUrl+'Barbatana','GET', null,'text/plain')[2]));

        this._especieView.loadDenticao
            (JSON.parse(Conn.conect(this._resourceUrl+'Denticao','GET', null,'text/plain')[2]));

        this._especieView.loadDorso
            (JSON.parse(Conn.conect(this._resourceUrl+'Dorso','GET', null,'text/plain')[2]));

        this._especieView.loadFocinho
            (JSON.parse(Conn.conect(this._resourceUrl+'Focinho','GET', null,'text/plain')[2]));

        this._especieView.loadReproducao
            (JSON.parse(Conn.conect(this._resourceUrl+'Reproducao','GET', null,'text/plain')[2]));

        this._especieView.loadVentre
            (JSON.parse(Conn.conect(this._resourceUrl+'Ventre','GET', null,'text/plain')[2]));
    }

    load(){
        
        JSON.parse(Conn.conect(this._resourceUrl+'Dorso','GET', null,'text/plain')[2]);
    }

}
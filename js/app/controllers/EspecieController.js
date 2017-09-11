
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

        this.load();
        this._especieView._effects();
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


    load(){
        this._especieView.loadTables(['dorso', 'focinho', 'reproducao', 'barbatana', 'denticao', 'ventre']);
    }

}
class EspecieController{

    constructor() {

        let $ = document.querySelector.bind(document);
        this._conn = new Conn();

        this._cientificName = $('#name');
        this._extinction = $('#extinct');
        this._description = $('#description');
        this._smallSize = $('#small_size');
        this._midSize = $('#mid_size');
        this._bigSize = $('#big_size');
        this._puppySize =$('#puppy_size');   
    }

    add(event){
        event.preventDefault();
        this._conn.conect('http://localhost:8282/sniet_api/servlet/especies/',
        'POST', ToJson.generateJsonClean(this._createEspecie()),'application/json');
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


}
class EspecieController{

    constructor() {

        let $ = document.querySelector.bind(document);
        
        this._especieView = new EspecieView();

        this._cientificName = $('#name');
        this._extinction = $('#extinct');
        this._description = $('#description');
        this._smallSize = $('#small_size');
        this._midSize = $('#mid_size');
        this._bigSize = $('#big_size');
        this._puppySize =$('#puppy_size');   


        //$('#div-dorso').appendChild(this._especieView.loadDorso());

    }

    add(event){
        event.preventDefault();
        
        /*Conn.conect('http://localhost:8282/sniet_api/servlet/especies/',
        'POST', ToJson.generateJsonClean(this._createEspecie()),'application/json');*/

        let resp = Conn.conect('http://localhost:8282/sniet_api/servlet/resource/'+'Dorso',
        'GET', null,'text/plain');

        console.log(resp);
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


    loadData(){
        
    }

}
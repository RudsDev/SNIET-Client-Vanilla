
class EspecieController{

    constructor() {

        
        
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource/';

        this._especieView = new EspecieView();

        this.load();
    }

    add(){

        //console.log(document.querySelector('#select-table-dorso caption.info span.selected-value'));   

       console.log(this._createEspecie()); 
    }

    remove(){
        
    }

    update(){
        
    }

    _createEspecie(){

        let $ = document.querySelector.bind(document);
        
        let cientificName = $('#name');
        let extinction = $('#extinct');
        let description = $('#description');
        let smallSize = $('#small_size');
        let midSize = $('#mid_size');
        let bigSize = $('#big_size');
        let puppySize = $('#puppy_size');

        let selectDorso = $('#select-table-dorso caption.info span.selected-value');
        let selectFocinho = $('#focinho-select');
        let selectVentre = $('#ventre-select');
        let selectReprod = $('#reproducao-select');
        let selectBarbatana = $('#barbatana-select');
        let selectDenticao = $('#denticao-select');

        //return selectDorso;

        return new Especie(undefined, cientificName.value,
        description.value, smallSize.value, 
        midSize.value, bigSize.value,
        puppySize.value, extinction.value, 
        selectBarbatana.innerText, selectDenticao.innerText, selectDorso.innerText,
        selectFocinho.innerText, selectReprod.innerText, selectVentre.innerText, undefined); 

    }


    load(){
        this._especieView.loadTables(['dorso', 'focinho', 'reproducao', 'barbatana', 'denticao', 'ventre']);
    }

}
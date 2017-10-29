
class EspecieController{

    constructor() {

        
        
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/';

        this._especieView = new EspecieView();

        this.load();
    }

    add(){   
       let status = Conn.conect(`${this._resourceUrl}especies`,'POST',this._createEspecie(),'application/json');
       console.log(status);
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

        let selectDorsoValue = $('#select-table-dorso caption.info span.selected-value');
        let selectDorsoID = $('#select-table-dorso input[name=selected-item]:checked');
        let dorso = {};

        let selectFocinhoValue = $('#select-table-focinho caption.info span.selected-value');
        let selectFocinhoID = $('#select-table-focinho input[name=selected-item]:checked');
        let focinho = {};        

        let selectVentreValue = $('#select-table-ventre caption.info span.selected-value');
        let selectVentreID = $('#select-table-ventre input[name=selected-item]:checked');
        let ventre = {};

        let selectReprodValue = $('#select-table-reproducao caption.info span.selected-value');
        let selectReprodID = $('#select-table-reproducao input[name=selected-item]:checked');
        let reproducao = {};

        let selectBarbatanaValue = $('#select-table-barbatana caption.info span.selected-value');
        let selectBarbatanaID = $('#select-table-barbatana input[name=selected-item]:checked');
        let barbatana = {};

        let selectDenticaoValue = $('#select-table-denticao caption.info span.selected-value');
        let selectDenticaoID = $('#select-table-denticao input[name=selected-item]:checked');
        let denticao = {};
        
        let nomesPopulares = Add.generateJSON();

        // return new Especie(undefined, cientificName.value,
        // description.value, smallSize.value, 
        // midSize.value, bigSize.value,
        // puppySize.value, extinction.value, 
        // selectBarbatana.innerText, selectDenticao.innerText, selectDorso.innerText,
        // selectFocinho.innerText, selectReprod.innerText, selectVentre.innerText,
        // JSON.parse(nomesPopulares)); 

    }


    load(){
        this._especieView.loadTables(['dorso', 'focinho', 'reproducao', 'barbatana', 'denticao', 'ventre']);
    }

}
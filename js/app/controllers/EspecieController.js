
class EspecieController{

    constructor() {

        
        
        this._resourceUrl = 'http://localhost:8282/sniet/app';

        this._especieView = new EspecieView();

        this.load();
    }

    add(){   
       let status = Conn.conect(`${this._resourceUrl}especies`,'POST',JSON.stringify(this._createEspecie()),'application/json');
       //console.log(this._createEspecie());
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
        let selectDorsoID = $('#select-table-dorso input[name="selected-item-dorso"]:checked');
        let dorso = {
            "idDorso": selectDorsoID.value,
            "descCorDorso": selectDorsoValue.innerText
        };

        let selectFocinhoValue = $('#select-table-focinho caption.info span.selected-value');
        let selectFocinhoID = $('#select-table-focinho input[name=selected-item-focinho]:checked');
        let focinho = {
            "idFocinho": selectFocinhoID.value,
            "tipoFocinho": null,
            "descFocinho": selectFocinhoValue.innerText
        };        

        let selectVentreValue = $('#select-table-ventre caption.info span.selected-value');
        let selectVentreID = $('#select-table-ventre input[name=selected-item-ventre]:checked');
        let ventre = {
            "codVentre": selectVentreID.value,
            "descCorVentre": selectVentreValue.innerText
        };

        let selectReprodValue = $('#select-table-reproducao caption.info span.selected-value');
        let selectReprodID = $('#select-table-reproducao input[name=selected-item-reproducao]:checked');
        let reproducao = {
            "idReproducao": selectReprodID.value,
            "tipoReproducao": selectReprodValue.innerText
        };

        let selectBarbatanaValue = $('#select-table-barbatana caption.info span.selected-value');
        let selectBarbatanaID = $('#select-table-barbatana input[name=selected-item-barbatana]:checked');
        let barbatana = {
            "idBarbatana": selectBarbatanaID.value,
            "descCorBarbatana": selectBarbatanaValue.innerText
        };

        let selectDenticaoValue = $('#select-table-denticao caption.info span.selected-value');
        let selectDenticaoID = $('#select-table-denticao input[name=selected-item-denticao]:checked');
        let denticao = {
            "idDenticao": selectDenticaoID.value,
            "caracDenticao": selectDenticaoValue.innerText
        };

        let selectFamiliaValue = $('#select-table-denticao caption.info span.selected-value');
        let selectFamiliaID = $('#select-table-familia input[name=selected-item-familia]:checked');
        let familia = {
            "idFamilia": selectFamiliaID.value,
            "descFamilia": selectFamiliaValue.innerText,
        };
        
        let nomesPopulares = Add.generateJSON();

        console.log(selectDorsoID.value);
        console.log(selectFocinhoID.value);
        console.log(selectVentreID.value);
        console.log(selectReprodID.value);
        console.log(selectBarbatanaID.value);
        console.log(selectDenticaoID.value);
        console.log(selectFamiliaID.value);
        
        
        

        // return new Especie(undefined, cientificName.value,
        // description.value, smallSize.value, 
        // midSize.value, bigSize.value,
        // puppySize.value, extinction.value, 
        // selectBarbatana.innerText, selectDenticao.innerText, selectDorso.innerText,
        // selectFocinho.innerText, selectReprod.innerText, selectVentre.innerText,
        // JSON.parse(nomesPopulares)); 


        return new Especie(undefined, cientificName.value,
            description.value, smallSize.value, 
            midSize.value, bigSize.value,
            puppySize.value, extinction.value, 
            barbatana, denticao, dorso, focinho, reproducao, ventre,
            JSON.parse(nomesPopulares));

    }


    load(){
    this._especieView.loadTables(['dorso'/*, 'focinho', 'reproducao', 'barbatana', 'denticao', 'ventre', 'familia'*/]);
    }

}
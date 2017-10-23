Add = {

    init:function(){

        let btnAdd = document.querySelector('#add-popular-name');
        this._resourceUrl = 'http://localhost:8282/sniet_api/servlet/resource/';

        Add.addNome();
        Add.generateJSON();
        document.addEventListener( "click", Add.removeNome );
    },

    addNome : function(){

        let nameInput = document.querySelector('#pop-name'); 
        let countryInput = document.querySelector('#pop-name-country');
        let btnAdd = document.querySelector('#add-pop-name');

        btnAdd.addEventListener('click',function(event) {
            let name = nameInput.value;
            let country = countryInput.value;
            Add.createBox(name, country);
        });
    },

    removeNome : function(event){

        let element = event.target;

        if(element.classList.contains('close-box-name'))    
            element.parentNode.remove();
    },


    createBox : function(name, country){

        const container  = document.querySelector('#container-pop-name');

        let box =  `
            <div class="box-name">
                <span class="pop-name">${name}</span>
                <input type="hidden" class="pop-name-country" value="${country}">
                <span class="close-box-name">X</span>
            </div>    
        `;

        Add.appendHtml(container,box);
        Add._clearPopField();
    },

    appendHtml : function (el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
          el.appendChild(div.children[0]);
        }
    },


    generateJSON : function () {

        let btnGen = document.querySelector('#gen-json-pop');

        btnGen.addEventListener('click', function(){
           
            let boxNames = Array.from(document.querySelectorAll('.box-name'));

            let objNames =  boxNames.map((box)=>{
                return {
                    popularName: box.querySelector('span.pop-name').textContent,
                    country: box.querySelector('.pop-name-country').value
                }
            });

            let jsonNames = JSON.stringify(objNames);

            console.log(jsonNames);

            return jsonNames;
        });
    },


    _clearPopField : function () {
        let inputName = document.querySelector('#pop-name');
        inputName.value = '';
        inputName.focus();
    }
}

Add.init();
Add = {

    init:function(){

        let btnAdd = document.querySelector('#add-popular-name');

        console.log('Iniciando ADD!');

        Add.addNome();
    },

    addNome : function(){
        let nameInput = document.querySelector('#pop-name'); 
        let btnAdd = document.querySelector('#add-pop-name');


        btnAdd.addEventListener('click',function(event) {
            
            let name = nameInput.value;

            console.log(name);

            Add.createBox(name);

        });

    },

    removeNome : function(){
        
    },


    createBox : function(name){

        const container  = document.querySelector('#container-pop-name');

        //console.log(container);

        let box =  `
            <div class="box-name">
                <span>${name}</span>
            </div>    
        `;

        Add.appendHtml(container,box);


    },

    appendHtml : function (el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
          el.appendChild(div.children[0]);
        }
    }

}

Add.init();
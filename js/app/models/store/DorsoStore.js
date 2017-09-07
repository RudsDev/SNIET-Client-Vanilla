class DorsoStore {
    
        constructor(){
            this._dorsos = [];
        }
    
        
        get dorsos(){
            return this._dorsos;
        }


        /*TODO Implementar verificação de listagem vazia/atualizada */
        loadDorsos(load){
            this._dorsos = load();
        }

    }


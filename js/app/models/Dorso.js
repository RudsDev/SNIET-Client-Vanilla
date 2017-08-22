class Dorso {

    constructor(idDorso, descCorDorso){
        this._idDorso = idDorso;
        this._descCorDorso = descCorDorso;
    }

    get idDorso(){
        return this._idDorso;
    }

    get descCorDorso(){
        return this._descCorDorso;
    }
}
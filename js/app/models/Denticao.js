class Denticao {
    
    constructor(idDenticao, tipoDenticao){
        this._idDenticao = idDenticao;
        this._descDenticao = descDenticao;
    }

    get idDenticao(){
        return this._idDenticao;
    }

    get descDenticao(){
        return this._descDenticao;
    }
}
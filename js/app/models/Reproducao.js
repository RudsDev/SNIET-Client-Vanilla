class Reproducao {
    
    constructor(idReproducao, tipoReproducao){
        this._idReproducao = idReproducao;
        this._tipoReproducao = tipoReproducao;
    }

    get idReproducao(){
        return this._idReproducao;
    }

    get tipoReproducao(){
        return this._tipoReproducao;
    }
}
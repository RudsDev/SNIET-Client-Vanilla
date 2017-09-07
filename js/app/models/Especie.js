class Especie {

    constructor(idEspecie, nomeCientifico, descricao, 
        tamMenor, tamMedio, tamMaior,tamMedioFilhote,
        extincao, barbatana, denticao, dorso, focinho,
        reproducao, ventre, nomesPopulares){
        
        this._idEspecie = idEspecie;
        this._nomeCientifico = nomeCientifico;
        this._descricao = descricao;
        this._tamMenor = tamMenor;
        this._tamMedio = tamMedio;
        this._tamMaior = tamMaior;
        this._tamMedioFilhote = tamMedioFilhote;
        this._extincao = extincao;
        this._barbatana = barbatana;
        this._denticao = denticao;
        this._dorso = dorso;
        this._focinho = focinho;
        this._reproducao = reproducao;
        this._ventre = ventre;
        this.nomesPopulares = nomesPopulares;
    }


    get idEspecie(){
        return this._idEspecie;
    }

    get nomeCientifico(){
        return this._nomeCientifico;
    }

    get descricao(){
        return this._descricao;
    }

    get tamMenor(){
        return this.tamMenor;
    }

    get tamMedio(){
        return this.tamMedio;
    }

    get tamMaior(){
        return this._tamMaior;
    }

    get tamMedioFilhote(){
        return this;
    }

    get extincao(){
        return this._extincao;
    }
}
class Habitat {
    
    constructor(idHabitat, descHabitat){
        this._idHabitat = idHabitat;
        this._descHabitat = descHabitat;
    }

    get idHabitat(){
        return this._idHabitat;
    }

    get descHabitat(){
        return this._descHabitat;
    }
}

class EspecieView{
    
        constructor(element){
            
            const $ = document.querySelector.bind(document);

            this._selectDorso = $('#dorso-select');
            this._selectFocinho = $('#focinho-select');
            this._selectVentre = $('#ventre-select');
            this._selectReprod = $('#reproducao-select');
            this._selectBarbatana = $('#barbatana-select');
            this._selectDenticao = $('#denticao-select');
        }


        loadDorso(dorsos){
            Util.appendHtml(this._selectDorso, 
                dorsos.map(dorso=>{
                    return `<option value="${dorso.idDorso}">${dorso.descCorDorso}</option>`
                }),
                'span'
            )
        }

        loadFocinho(focinhos){
            Util.appendHtml(this._selectFocinho, 
                focinhos.map(focinho=>{
                    return `<option value="${focinho.idFocinho}">${focinho.descFocinho}</option>`
                }),
                'span'
            )
        }

        loadVentre(ventres){
            Util.appendHtml(this._selectVentre, 
                ventres.map(ventre=>{
                    return `<option value="${ventre.idVentre}">${ventre.descCorVentre}</option>`
                }),
                'span'
            )
        }

        loadReproducao(reprods){
            Util.appendHtml(this._selectReprod, 
                reprods.map(reprod=>{
                    return `<option value="${reprod.idReproducao}">${reprod.tipoReproducao}</option>`
                }),
                'span'
            )
        }

        loadBarbatana(barbatanas){
            Util.appendHtml(this._selectBarbatana, 
                barbatanas.map(barbatana=>{
                    return `<option value="${barbatana.idBarbatana}">${barbatana.descCorBarbatana}</option>`
                }),
                'span'
            )
        }

        loadDenticao(dentes){
            Util.appendHtml(this._selectDenticao, 
                dentes.map(denticao=>{
                    return `<option value="${denticao.idDenticao}">${denticao.caracDenticao}</option>`
                }),
                'span'
            )
        }
    }
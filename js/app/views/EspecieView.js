
class EspecieView{
    
        constructor(element){
            const $ = document.querySelector.bind(document);

            this._divDorso = $('#div-dorso');
            this._divFocinho = $('#div-focinho');
            this._divVentre = $('#div-ventre');
            this._divReprod = $('#div-reprod');
            this._divBarbatana = $('#div-barbatana');
            this._divDenticao = $('#div-denticao');
        }


        loadDorso(dorsos){
            this._divDorso.innerHTML = `
            <select id="dorsos-select">
                ${dorsos.map(dorso=>{
                    return `<option value="${dorso.descCorDorso}">${dorso.descCorDorso}</option>`
                })}
            </select>
            `;
        }

        loadFocinho(focinhos){
            this._divFocinho.innerHTML = `
            <select id="focinhos-select">
                ${focinhos.map(focinho=>{
                    return `<option value="${focinho.descFocinho}">${focinho.descFocinho}</option>`
                })}
            </select>
            `;
        }

        loadVentre(ventres){
            this._divVentre.innerHTML = `
            <select id="ventres-select">
                ${ventres.map(ventre=>{
                    return `<option value="${ventre.descCorVentre}">${ventre.descCorVentre}</option>`
                })}
            </select>
            `;
        }

        loadReproducao(reprods){
            this._divReprod.innerHTML = `
            <select id="reprods-select">
                ${reprods.map(reprod=>{
                    return `<option value="${reprod.tipoReproducao}">${reprod.tipoReproducao}</option>`
                })}
            </select>
            `;
        }

        loadBarbatana(barbatanas){
            this._divBarbatana.innerHTML = `
            <select id="barbatanas-select">
                ${barbatanas.map(barbatana=>{
                    return `<option value="${barbatana.descCorBarbatana}">${barbatana.descCorBarbatana}</option>`
                })}
            </select>
            `;
        }

        loadDenticao(dentes){
            this._divDenticao.innerHTML = `
            <select id="denticao-select">
                ${dentes.map(denticao=>{
                    return `<option value="${denticao.caracDenticao}">${denticao.caracDenticao}</option>`
                })}
            </select>
            `;
        }
    }
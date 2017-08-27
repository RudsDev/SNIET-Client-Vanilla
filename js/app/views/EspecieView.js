class EspecieView{
    
        constructor(element){
            
        }

        loadDorso(dorsos){
            return `
            <select id="extinct">
                ${dorsos.map(dorso=>{
                    `<option value="${dorso.descCorDorso}">${dorso.descCorDorso}</option>`
                })}
            </select>
            `;
        }
    }
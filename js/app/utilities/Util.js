class Util{
    
    /**
     * 
     * @param {HTMLElement} element - Elemento destino
     * @param {String} str - elementos a serem criados no destino
     * @param {String} tag - tag container  
     */
        static appendHtml(element, str, tag) {
            var div = document.createElement(tag);
            div.innerHTML = str;
            while (div.children.length > 0) {
                element.appendChild(div.children[0]);
            }
        }
    }
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

    
    /**
     * 
     * Busca o parent do elemento desejado. 
     * Em caso de não se passar um selector especifico a tree completa de parentNodes será retornada.
     * 
     * Based: https://gist.github.com/ziggi/2f15832b57398649ee9b - Ziggi
     * 
     * @param {HTMLElement} element - Elemento destino do qual se deseja buscar o parent.
     * @param {String} parentSelector - Seletor do elemento pai que se deseja encontrar.  
     */
    static parent(element, parentSelector) {

        var selector = parentSelector;
        var elements = [];
        var ishaveselector = selector !== undefined;
        
        while ((element = element.parentElement) !== null) {
            if (element.nodeType !== Node.ELEMENT_NODE) {
                continue;
            }
            if (!ishaveselector || element.matches(selector)) {
                elements.push(element);
            }
        }
        
        if(elements.length<2)
            return elements[0];

        return elements;
    }
}
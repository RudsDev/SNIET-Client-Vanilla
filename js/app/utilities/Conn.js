class Conn{

    constructor() {
        const _xhrConn = new XMLHttpRequest();
        this._xhr = _xhrConn;    
    }
    

    conect(uri, method, data, dataType) {
        this._xhr.open(method, uri, false);
        this._xhr.setRequestHeader('Content-Type', dataType);
        this._xhr.send(data);
    }
    
}
class Conn{

    static conect(uri, method, data, dataType) {
        
        let xhr = new XMLHttpRequest();
        

        try {

            xhr.open(method, uri, false);
            xhr.setRequestHeader('Content-Type', dataType);
            xhr.send(data);

        } catch (error) {
            console.log(error);
        }
        finally{
            return [xhr.status, xhr.responseURL, xhr.response];
        }
    }
    
}
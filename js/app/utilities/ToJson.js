class ToJson{

    static generateJsonClean(object){

        let jsonMap = new Map()
        let obj = {};

        for (var key in object)
             jsonMap.set(key.replace('_',''),object[key]);

        jsonMap.forEach ((value,key) => {obj[key] = value});

        return JSON.stringify(obj);

    }
}
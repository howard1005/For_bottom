const request = require('request')

let get = function(url){
    const options = {
        url: encodeURI(url), 
        method: 'GET'
    }
    return new Promise((resolve, reject) => {
        request(options, function(error, response, body){
            if(error){
                global.logger.error(error)
                reject(error)
                return
            }
            global.logger.info(`get response : ${response}`)
            var obj = JSON.parse(body)
            resolve(obj)
        })
    })
}

let post = function(url, body){
    const options = {
        uri:url, 
        method: 'POST',
        body: body,
    }
    return new Promise((resolve, reject) => {
        request(options, function(error, response, body){
            if(error){
                global.logger.error(error)
                reject(error)
            }
            global.logger.info(`get response : ${response}`)
            var obj = JSON.parse(body)
            resolve(obj)
        })
    })
}

module.exports = { 
    get, 
    post 
}


let get = function(url){
    return request({url: url, method: "GET"})
}

let post = function(url, body, cb){ // cb(err,httpResponse,body)
    const options = {
        uri:url, 
        method: 'POST',
        body: body
    }
    request.post(options, cb)
}

module.exports = get;
module.exports = post;
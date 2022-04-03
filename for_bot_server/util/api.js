
let get = function(url){
    return request({url: url, method: "GET"})
}

let post = function(url){
    return request({url: url, method: "POST"})
}

module.exports = get;
module.exports = post;
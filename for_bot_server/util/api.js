
let get = function(url){
    return request({url: url, method: "GET"})
}

module.exports = get;
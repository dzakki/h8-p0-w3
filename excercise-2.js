function balikString(str){

    var results = ''
    for (let i = str.length - 1; i >= 0; i--) {
        results += str[i]
    }
    return results
}

console.log(balikString("hello world!"))
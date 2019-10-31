function cariMean(arr) {
// you can only write your code here!
    var resultTemp = 0,
        result;
    for (var i = 0; i < arr.length; i++) {
        resultTemp = resultTemp + arr[i]
    }
    resultTemp = resultTemp / arr.length
    resultTemp = String(resultTemp)
    // Math.ceil()
    for (var i = 0; i < resultTemp.length; i++) {
        if ( resultTemp[i - 1] !== undefined && resultTemp[i - 1] == '.' ) {
            if(resultTemp[i] >= 5){
                resultTemp = parseInt(resultTemp[0]) + 1
            }else{
                resultTemp = resultTemp[0]
            }
        }
    }
    result = resultTemp
    return result
}
  
console.log(cariMean([1, 2, 3, 4, 5])); // 3
// TEST CASES
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
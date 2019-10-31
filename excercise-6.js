function angkaPalindrome(num) {
    // you can only write your code here!
    if (num <= 10) {
        return num + 1
    }
    var numTemp = num
    var numTempStr,
        result;
    while (true) {

        numTemp++;
        numTempStr = String(numTemp);

        result = ''
        for (var i = numTempStr.length - 1; i >= 0; i--) {
            result += numTempStr[i]
        }
        if (numTemp == parseInt(result)) {
            return result
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
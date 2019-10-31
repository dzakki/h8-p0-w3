function palindrome(kata) {
    // you can only write your code here!
    var limit = kata.length - 1
    var result = ''
    for (var i = limit; i >= 0; i--) {
        result += kata[i]
    }
    
    return kata == result
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
console.log('------ using split ---------')
// using split
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var strSplit = kalimat.split(" ")
    var arrLength = strSplit.length
    return arrLength
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log('------ not using split ---------')
  // not using split
  function hitungJumlahKata2(kalimat) {
    // you can only write your code here!
    var jumlah = 1;
    
    for (var i = 0; i < kalimat.length; i++) {
      if(kalimat[i] == ' '){
        jumlah += 1
      }
    }
    return jumlah
  }
  console.log(hitungJumlahKata2('I have a dream')); // 4
  console.log(hitungJumlahKata2('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata2('A song to sing')); // 4
  console.log(hitungJumlahKata2('I')); // 1
  console.log(hitungJumlahKata2('I believe I can code')); // 5
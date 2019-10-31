function pasanganTerbesar(num) {
    // you can only write your code here!
    var arr = [] 
    var str = String(num)
    var limit = str.length
    // console.log(limit)
    // arr // membuat angka 2 digit dalam bentuk array
    for (var i = 0; i < limit ; i += 2) {

        arr.push(parseInt(str[i]+str[i + 1])) // push array dan di parse integer 
        if(i !== 0){
            arr.push(parseInt(str[i - 1]+str[i])) // push array dan di parse integer
        }
        
    }

    limit = arr.length
    var nilaiMak;
    // mencari nilai paling besar
    for (let i = 0; i < limit; i++) {

        if(i == 0){
            nilaiMak = arr[i]
        }
        
        for (var j = 0; j < limit; j++) {

            if ( nilaiMak < arr[j] ) { // jika nilai mak sebelum nya kurang dari arr[index j]
                nilaiMak = arr[j]
            }

        }

    }
    return nilaiMak
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
function targetTerdekat(arr) {
    // you can only write your code here!
    let locOfO = 0;
    let locOfX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            locOfO = i
        }
        if(arr[i] == 'x'){
            locOfX.push(i)
        }
    }

    if(locOfX.length == 0){
        return 0
    }

    let selisih = locOfX[0] - locOfO 
    if(locOfX[0] < locOfO){
        selisih = locOfO - locOfX[0]
    }

    // console.log(selisih, locOfO)/

    for (let i = 1; i < locOfX.length; i++) {
        let selisihTemp = locOfX[i] - locOfO
        if (locOfX[i] < locOfO) {
            selisihTemp =  locOfO - locOfX[i]
        }
        if ( selisihTemp < selisih ) {
            selisih = selisihTemp
        }
    }

    // console.log('---', selisih)
    // console.log('+++', locOfO)
    // if(selisih < locOfO){
    //     console.log('selisih', selisih)
    //     return selisih 
    // }
    return selisih

}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2



/**
 * 1. Cari loc o \/
 * 2. Cari loc x keseluruhan dan taruh di arr \/
 * 3. Cari loc x yang terdekat dari o 
 * 
 *  // mencari loc x yang terdekat dari o
 * // Selisih
 * 1. loop loc x
 * 2. buat variable untuk menampung hasil setiap loop loc x
 * 3. setiap loop loc, maka loc x dikurang dengan loc o
 * // Bandingkan 
 * 1. Jika selisih sebelumnya lebih besar dari selisih saat ini
 * 2. Selisih sama dengan selilish saat ini
*/

/**
 *  3 2
    true
    4 0
    true
    6 6
    true
    0
    2 1
    true
 * 
 * */ 




/*
function targetTerdekat(arr) {
    // you can only write your code here!
    var locOfO = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            for (let j = i; j < arr.length; j++) {
                if (arr[j] == 'x') {
                    return j - i
                }else if( arr[j - 1] == 'x' ){
                    return i - (j - 1)
                }
            }
        }
    }
    
    return 0
}

*/
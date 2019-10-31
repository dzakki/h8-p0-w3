function groupAnimals(animals) {
    // you can only write your code here!


    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let arrAlphabets = []
    let AlphabetIsExist = false
    let results = []
    for (let i = 0; i < animals.length; i++) {
        AlphabetIsExist = false

        for (let j = 0; j < arrAlphabets.length; j++) {

            if(animals[i][0] === arrAlphabets[j]){
                AlphabetIsExist = true
            }

        }
        if(!AlphabetIsExist){
            arrAlphabets.push(animals[i][0])
        }
    }

    let indexArrAlpabets = []
    
    for (let i = 0; i < arrAlphabets.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if ( arrAlphabets[i] == alphabets[j] ) {
                indexArrAlpabets.push(j)
            }
        }
    }

    for (let i = 1; i < arrAlphabets.length; i++) {
        for (let j = 0; j < arrAlphabets.length; j++) {
            let temp;
            if (indexArrAlpabets[i] < indexArrAlpabets[j]) {
                temp = arrAlphabets[i]
                arrAlphabets[i] = arrAlphabets[j]
                arrAlphabets[j] = temp

                temp = indexArrAlpabets[i]
                indexArrAlpabets[i] = indexArrAlpabets[j]
                indexArrAlpabets[j] = temp
            }
        }
    }
    
    // return {indexArrAlpabets, arrAlphabets}
    for (let i = 0; i < arrAlphabets.length; i++) {

        let temp = []
        for (let j = 0; j < animals.length; j++) {
            if(arrAlphabets[i] == animals[j][0]){
                temp.push(animals[j])
            }
        }
        results.push(temp)
    }
    // console.log(results)
    return results
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

/** Todo
 * 1. buat variable array untuk menampung satu abjad (a,b,c,d)
 * 2. loop arr
 * 3. push abjad in variable array
 * 4. if exist, maka jangan di push
 * 
 * // sort
 * ____________________________________________________________________________________________________________
 * 1. a | b | c | d | e | f | g | h | i |  j  |  k  | l  | m  | n  | o  | p  | q  | r  | s  | t  | u  | f  | w |
 * ** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |  10 |  11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23|
 * ____________________________________________________________________________________________________________|
 * */

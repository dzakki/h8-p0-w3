var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log(dataHandling(input))
function dataHandling(arr) {
    var hasil = ''
    for (let i = 0; i < arr.length; i++) {
        hasil += 'Nomor ID: ' + arr[i][0] + '\n'
        hasil +=  'Nama Lengkap: '  + arr[i][1] + '\n'
        hasil +=  'TTL: '  + arr[i][2] + '\n'
        hasil += 'Hobi: ' + arr[i][3] + '\n \n'
    }   
    return hasil
}
function dataHandling2(arr) {

    arr.splice(1, 0, "Roman Alamsyah Elsharawy")
    arr.splice(2, 0, "Provinsi Bandar Lampung")
    console.log(arr)
    var Date = arr[5].split('/')

    var bulan = parseInt(Date[1])
    switch (bulan) {
        case 01:
            bulan = 'Januari'
            break;
        case 02:
            bulan = 'Februari'
            break;
        case 03:
            bulan = 'Maret'
            break;    
        case 04:
            bulan = 'April'
            break;
        case 05:
            bulan = 'Mei'
            break;
        case 06:
            bulan = 'Juni'    
            break;
        case 07:
            bulan = 'Juli'
            break;
        case 08:
            bulan = 'Agustus'
            break;
        case 09:
            bulan = 'September'
            break;
        case 10:
            bulan = 'Oktober'
            break;
        case 11:
            bulan = 'November'
            break;    
        case 12:
            bulan = 'Desember'
            break;   
        default:
            break 
    }
    console.log(bulan)

    var joinArr = Date.join('-')

    var sortArr = Date.sort(function(a, b){return b-a})
    console.log(sortArr)

    
    console.log(joinArr)

    arr[1] = arr[1].slice(0, 15) 
    console.log(arr[1])
}
dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])

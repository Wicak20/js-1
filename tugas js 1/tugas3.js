const printNumber = (num) => {
    if (typeof num !== 'number') {
        console.log('Parameter harus angka!')
    }
    for (let i = 0; i < num; i++) {
        let hasil = ''
        for (let j = 0; j < num - i; j++) {
            hasil += j + 1
        }
        console.log(hasil)
    }

}
printNumber(5)
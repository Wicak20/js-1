const nilaiInput = () => {
    const ipa = 80
    const mtk = 60
    const indo = 90
    const inggris = 100


    const total = ipa + mtk + indo + inggris
    const average = total / 4

    let grade = ""

    if (average > 100 || average < 0) {
        return `input invalid karena nilai rata rata ${average} tidak sesuai`
    } else if (average >= 90) {
        grade = "A"
    } else if (average >= 80) {
        grade = "B"
    } else if (average >= 70) {
        grade = "C"
    } else if (average >= 60) {
        grade = "D"
    } else {
        grade = "E"
    }


    return `Rata rata  ${average}, Grade : ${grade}`
}
console.log(nilaiInput())  
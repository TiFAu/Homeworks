// 12. HTML optional fields
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.
let str = `<table border='1'><tr style = 'background-color : green;'>`
let arrKeys = []
persons.forEach(function(item, i, arr) {
    for (let x in item){
        if (arrKeys.includes (x) == false ){
            arrKeys.push(x)
        }
    }
})
for (let i = 0; i < arrKeys.length; i++){
    str += `<td>${arrKeys[i]}</td>`
}
str += "</tr>"
for (let y in persons){
    str += `<tr>`
    for(let s in arrKeys){
        str += `<td style = 'text-align: center'>`
        if ( arrKeys[s] in persons[y] ){
            str += `${persons[y][arrKeys[s]]}</td>`
        }else {str += ` - </td>`}
    }
    str += `</tr>`
};
str += "</table>"
document.write(str)
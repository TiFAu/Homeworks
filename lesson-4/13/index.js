// 13.HTML tr color
// Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
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
    if (y%2 == 0){
        str += `<tr>`       
    }else {str += `<tr style = 'background-color : gray;'>`}

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
// 14.HTML th optional
// Переработайте вывод persons в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в 
//заголовок HTML-таблицы. Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, 
//выведите HTML-заголовок используя тэги <th>, а потом выводите все записи.
let str = `<table border='1'><th style = 'background-color : green;'>`
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
str += "</th>"
for (let y in persons){
    if (y%2 == 0){
        str += `<tr>`       
    }else {str += `<tr style = 'background-color : gray;'>`}

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
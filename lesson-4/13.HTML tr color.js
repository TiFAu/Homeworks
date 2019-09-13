// 13.HTML tr color
// Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
var str = `<table border='1'><tr style = 'background-color : green;'>`
var arrKeys = []
persons.forEach(function(item, i, arr) {
    for (var x in item){
        if (arrKeys.includes (x) == false ){
            arrKeys.push(x)
        }
    }
})
for (let i = 0; i < arrKeys.length; i++){
    str += `<td>${arrKeys[i]}</td>`
}
str += "</tr>"
for (var y in persons){
    if (y%2 == 0){
        str += `<tr>`       
    }else {str += `<tr style = 'background-color : gray;'>`}

    for(var s in arrKeys){
        str += `<td style = 'text-align: center'>`
        if ( arrKeys[s] in persons[y] ){
            str += `${persons[y][arrKeys[s]]}</td>`
        }else {str += ` - </td>`}
    }
    str += `</tr>`
};
str += "</table>"
document.write(str)
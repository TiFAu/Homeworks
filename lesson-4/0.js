//1.3 persons
    var a = {
                name: "Иван",
                surname: "Гринкин"
        };
    var b = {
                name: "Ирина",
                surname: "Филипова"
        };
    var c = {
                name: "Насими",
                surname: "Мамедов"
        };


//2.different fields
    a.developmentExperience = "20";
    b.fathername = "Гаревна";
    c.sex = "man";


//3.fields check
    for (var x in a) {
        if ((x!=="name") && (x!=="surname")){
            alert (`имеется ключ ${x} и его значение ${a[x]} `)
        }
    }
    for (var x in b) {
        if ((x!=="name") && (x!=="surname")){
            alert (`имеется ключ ${x} и его значение ${b[x]} `)
        }
    }
    for (var x in c) {
        if ((x!=="name") && (x!=="surname")){
            alert (`имеется ключ ${x} и его значение ${c[x]} `)
        }
    }
                    //  ниже не самый лучший вариант проверки 
                    // function fielldsCheck ( obj ) {
                    //     for ( var x in obj ) {
                    //         ((x!=="name") && (x!=="surname"))?
                    //         console.log ( ` В этом объекте есть ключ ${x}, его значение ${obj[x]}` ) : null
                    //     } 
                    // }
                    // fielldsCheck ( a )
                    // fielldsCheck ( b )
                    // fielldsCheck ( c )

//4.array of persons
    var persons = [a, b, c]
    persons[ 3 ] = {
        name: "Антон",
        surname: "Турчин",
        hobbies: "js"
    }
//5.loop of persons
//Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])
    for ( var x in persons ) {
        console.log ( persons[x] )
    }

    // или
    for (i=0;i<=persons.length;i++){
        console.log(persons[i])
        }
    // или 
    persons.forEach(function(item, i, arr) {
        console.log(persons[i]);
      });
//6.loop of name and surname
//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.
    persons.forEach(function(item, i, arr) {
        console.log(`${persons[i]['name']} : ${persons[i]['surname']}`)
    });
//7.loop of loop of values
//Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов. Используйте вложенный цикл
    persons.forEach(function(item, i, arr) {
        for (var x in arr[i]){
        console.log(`${x} : ${arr[i][x]}`)}
    });
    //или
    for (var x in persons){
        var keysx = Object.keys(persons[x])
        for ( var y in keysx) {
            console.log(`${keysx[y]} : ${persons[x][keysx[y]]}`)
        }
    }
//8. fullName
//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
for (var x in persons){
    var keysx = Object.keys(persons[x])
    if (keysx.indexOf ("fathername")!=-1 ){
        persons[x]['fullName'] = `${persons[x]['name']} ${persons[x]['fathername']} ${persons[x]['surname']}` 
    }
    }
// 9.serialize
// Создайте JSON-строку из persons
    var myJsonString = JSON.stringify (persons)
// 10.deserialize
// Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
    var danj = `{"name":"Даниил","surname":"Марынич","position":"director"}`
    persons[4] = JSON.parse(danj)
// 11.HTML
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. Таблицы в HTML Пример кода:
    var str = "<table border='1'><tr style = 'background-color : green;'><td>Имя</td><td>Фамилия</td></tr>"
    for (let i = 0; i < persons.length; i++){
        str += `<tr><td>${persons[i]['name']}</td><td>${persons[i]['surname']}</td></tr>`
    }
    str += "</table>"
    //console.log(str)
    document.write(str)
// 12. HTML optional fields
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.
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
    str += `<tr>`
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
// 14.HTML th optional
// Переработайте вывод persons в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в 
//заголовок HTML-таблицы. Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, 
//выведите HTML-заголовок используя тэги <th>, а потом выводите все записи.
var str = `<table border='1' width="90%" height="100%"><tr style = 'background-color : green;'>`
var arrKeys = []
persons.forEach(function(item, i, arr) {
    for (var x in item){
        if (arrKeys.includes (x) == false ){
            arrKeys.push(x)
        }
    }
})
for (let i = 0; i < arrKeys.length; i++){
    str += `<th>${arrKeys[i]}</th>`
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


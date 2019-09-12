// 11.HTML
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. Таблицы в HTML Пример кода:
    var str = "<table border='1'><tr style = 'background-color : maroon;'><td>Имя</td><td>Фамилия</td></tr>"
    for (let i = 0; i < persons.length; i++){
        str += `<tr><td>${persons[i]['name']}</td><td>${persons[i]['surname']}</td></tr>`
    }
    str += "</table>"
    //console.log(str)
    document.write(str)
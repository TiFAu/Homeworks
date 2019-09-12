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

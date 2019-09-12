//6.loop of name and surname
//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.
    persons.forEach(function(item, i, arr) {
        console.log(`${persons[i]['name']} : ${persons[i]['surname']}`)
    });
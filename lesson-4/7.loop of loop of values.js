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


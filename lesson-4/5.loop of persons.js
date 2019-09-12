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
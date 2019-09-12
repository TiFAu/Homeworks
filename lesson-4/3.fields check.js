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

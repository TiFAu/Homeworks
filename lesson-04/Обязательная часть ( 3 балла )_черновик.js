var womenBag = {
    lipstick: 'вкусная',
    mirror: 'для души',
    notebook: 'аккуратная',
    pensil: 'острый'
}

function addInWomenBag ( what, description ){
    womenBag[ what ] = description
}

womenBag.add = addInWomenBag

// function checkThingInBag(what, where) { //Функция проверки наличия вещи в сумке
//     for (var x in where ) {
//         x === what ? console.log( ` В сумке  имеется ${what}  которая  ${where[what]} `):null
//     }
// }

// function deleteThingFromBag(what, where){      //Фунция удаляющая свойство wahat из объекта where
//     for (var y in where) {
//         y === what ? delete where[what] : null
//     }
// }

// womenBag.check = checkThingInBag;



// function removeThings ( what ){
//     checkTheStuff(what) ? 
//         deleteStuff(what) : 
//         console.log(`Простите, и все же ${what} отсутствует в сумочке`)
// }
// После детального прочтнения задания дошол до сути задания => И зачем проверка наличия. попробую скрестить ежа и ужа

function deleteThingFromBag( what ){      //Фунция удаляющая свойство wahat из объекта
    for (var y in this) {
        y === what ? delete this[ what ] : console.log( ` В сумке  ${ what }  отсутствует `)
    }
}
womenBag.delet = deleteThingFromBag;
//Вариант без проверки проще и все же в консоле выдает 4 сообщения ` В сумке  ${what}  отсутствует ` надо както лаконично допилить
// Либо постить все без сообщения либо допилить тернарку в тернарке
// function deleteThingFromBag( what ){      //Фунция удаляющая свойство what из объекта
//     for (var x in this ) {
//         x === what ? (for (var y in this) {
//             y === what ? delete this[ what ] : null 
//         } : console.log( " В сумке  ${ what }  отсутствует ")
// }

// понял что долго буду биться головой об угол запихивая for в тернарку и решил записать это через if
// function deleteThingFromBag( what ){      //Фунция удаляющая свойство what из объекта
//     for (var x in this ) {
//         if (x === 'what') { for (var y in this) {
//                             y === what ? delete this[ what ] : null ;
//                         } 
//         }
//         else( console.log(` В сумке  ${ what }  отсутствует `))
//     }
// }

function addInWomenBag ( what, description ){
    womenBag[ what ] = description
}
function deleteThingFromBag( what ){      //Фунция удаляющая свойство wahat из объекта
    if (this[ what ] === undefined ) {
        console.log(` В сумке  ${ what }  отсутствует `)
    }
    else {  for (var y in this) {
            y === what ? delete this[ what ] : null
            }
    }
}
womenBag.add = addInWomenBag;
womenBag.delet = deleteThingFromBag;


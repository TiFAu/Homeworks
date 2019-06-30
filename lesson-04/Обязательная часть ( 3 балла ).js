var womenBag = {                               // начальный объект 
    lipstick: 'вкусная',
    mirror: 'для души',
    notebook: 'аккуратная',
    pensil: 'острый'
}
function addInWomenBag ( what, description ){   //Функция добавле свойства what: 'description' в объект
    womenBag[ what ] = description
}
function deleteThingFromBag( what ){            //Фунция удаляющая свойство wahat из объекта
    if (this[ what ] === undefined ) {
        console.log(` В сумке  ${ what }  отсутствует `)
    }
    else {  for (var y in this) {
            y === what ? delete this[ what ] : null
            }
    }
}
womenBag.add = addInWomenBag;                   // добавление в объект метода добавления свойств
womenBag.delet = deleteThingFromBag;            // добавление в объект метода проверки наличия свойство и удаление его из объекта


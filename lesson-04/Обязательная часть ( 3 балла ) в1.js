womenBag = {                               // начальный объект 
    lipstick: 'вкусная',
    mirror: 'для души',
    notebook: 'аккуратная',
    pensil: 'острый',
    addInWomenBag : function ( what, description ){   //Функция добавле свойства what: 'description' в объект
        this[ what ] = description
    },
    deleteThingFromBag : function ( what ) {      
        this[ toString(what) ] ? 
            console.log(`В сумке ${what} отсутствует`) :
            delete this[ what ]
    }
}


function LibraryBook ( title, year, author ) {
    var title = title;
    var year = year;
    var author = author;
    var readerName = null;
    var readerData = null;
    function giveTheBook ( client ){
        readerName = client;
        readerData = new Date ();   
    }
    this.getBookInfo = function(){ // Возможно малость не по ТЗ и все же веселее как по мне ;-)
        if ( readerData !==null ){ console.log ( `Эту книгу счастливо заполучил ${readerName} аж ${readerData.toDateString()} !!!`)
        }
        else {console.log (`Данная книга пылится на полке`)}
    };
    this.getTheBook = function ( client ){ // функция выдачи книги клиенту, коли конечно книга пылится на полке
        if ( readerData !==null ){
            return null;
        }
        else {
            giveTheBook ( client );
            return title;
        };
    };
    this.returnBook = function  (){ //функция обнуляющая приватыне свойства характеризующие получателя книги и время выдачи --> отправляет книгу пылится на полку ;-)
        readerName = null;
        readerData = null;
    }
    
}
// Проверка работоспособности функции
var ВыразительлныйJS = new LibraryBook ("Выразительный JS", 2019, "Марейн Хавербек", ) // создаем интересный экземпляр
ВыразительлныйJS.getBookInfo() // --> Данная книга пылится на полке
ВыразительлныйJS.getTheBook ("Токарев")// --> Отдаем книгу на прочтение
ВыразительлныйJS.getBookInfo() // --> Эту книгу счастливо заполучил Токарев аж DDD MMM Day YEAR !!!
// Вот и все вроде путем благодаря Ирине  и устойчивому желанию освоить JS :-)
// Варианты №№ 1 и 2 - конструкторы, все остальные просто повеселиться ;-)
// Вариант № 1
var DesignerForFiveBallsOption1 = function (){
    this.addProperty = function ( property , value ){
        this[property] = value
    }
}
var oneObj1 = new DesignerForFiveBallsOption1 () // создаем объект
oneObj1.addProperty ( 'Свойство' , 'Значение' )      // тестируем добавления свойства и его значения

// Вариант № 2
function DesignerForFiveBallsOption2 ( params ) {}
var oneObj2 = new DesignerForFiveBallsOption2
DesignerForFiveBallsOption2.prototype.addProperty = function ( property , value ){
    this[property] = value
}
oneObj2.addProperty ( 'Свойство' , 'Значение' ) // дабавляем свойство и его значение
console.log(oneObj2)

// Вариант № 3
function DesignerForFiveBallsOption3 (){}
DesignerForFiveBallsOption3.prototype.addProperty = function ( property , value ){
    this[property] = value
}
var oneObj3 = {}
oneObj3.__proto__ = DesignerForFiveBallsOption3.prototype // передаем наследство ;-)
oneObj3.addProperty ( 'Свойство' , 'Значение' ) // дабавляем свойство и его значение
console.log(oneObj3)

// Вариант № 4
var oneObj4 = Object.create (
    { 
    addProperty( property , value ){
        this[property] = value 
    }
    } 
)
oneObj4.addProperty ( 'Свойство' , 'Значение' ) // дабавляем свойство и его значение
console.log(oneObj4)

// Вариант № 5
var oneObj5 = {}
var oneObj5 = Object.setPrototypeOf (
    oneObj5,
    { 
        addProperty( property , value ){
            this[property] = value 
       }
    }
)
oneObj5.addProperty ( 'Свойство' , 'Значение' ) // дабавляем свойство и его значение
console.log(oneObj5)

//Вариант №6 и сам пока не понял к чему такой финт закрутил
var oneObj6 = Object.create ( oneObj5 )
oneObj6.addProperty = function ( property , value ){
    this[property] = value
}
oneObj6.addProperty ( 'Свойство' , 'Значение' ) // дабавляем свойство и его значение
console.log(oneObj6)
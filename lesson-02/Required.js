var string = "Backend As A Service";
var letters = [];
function highlightFirstLetters (letterS, stringS){
                                                    var hFL = stringS.split ( " " ); //формируем массив из слов строки
                                                    for (i = 0; i <= stringS.split.length+1; i++){ // запускаем цикл 
                                                                                                    letterS.push ( hFL[i].slice ( 0, 1 )) // добавляем в массив первые буквы слов
                                                                                                    }
                                                    console.log (hFL, letterS)  // вывод в консоль на всякий случай
                                                    return  letterS;            // возвращаем результат
                                                }
highlightFirstLetters (letters, string) // вызов функции с параметрами
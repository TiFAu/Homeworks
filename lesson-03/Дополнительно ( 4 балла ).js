var objectMyOne =   {
                        name: "Антон",
                        data: "22.8.1979",
                        registered: true
                    }
var objectMyTwo = {
                    name: "Галина",
                    data: "04.8.1986",
                    registered: true
                    }
var objectMyThree = {
                        name: "Коля",
                        data: "",
                        registered: false
                    }


function userInfo(){  
    console.log(
        this.registered ? 
            `Дата регистрации: ${this.data}`  :  
            `Незарегистрированный пользователь: ${this.name}`
        )
}
                        
objectMyOne.getInfo = userInfo;
objectMyTwo.getInfo = userInfo;
objectMyThree.getInfo = userInfo;

objectMyOne.getInfo (objectMyOne)
objectMyTwo.getInfo (objectMyTwo)
objectMyThree.getInfo (objectMyThree)

objectMyOne.getInfo ()
objectMyTwo.getInfo ()
objectMyThree.getInfo ()



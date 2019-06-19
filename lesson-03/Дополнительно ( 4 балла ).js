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


function userInfo(object){  
                            this.name = object.name;
                            this.data = object.data;
                            this.registered = object.registered;
                            console.log(
                                        this.registered ? `Дата регистрации : ${this.data}` : `Незарегистрированный пользователь : ${this.name}`
                                        )
                        }
objectMyOne.getInfo = userInfo;
objectMyTwo.getInfo = userInfo;
objectMyThree.getInfo = userInfo;


objectMyOne.getInfo (objectMyOne)
objectMyTwo.getInfo (objectMyTwo)
bjectMyThree.getInfo (bjectMyThree)

/////////////////////////////////

var objectMyTwo = Object.create(objectMyOne);
objectMyTwo.name = "Галина";
objectMyTwo.data = "04.8.1986";
objectMyTwo.registered = true;
objectMyOne.getInfo = userInfo;
objectMyTwo.getInfo = userInfo;
 
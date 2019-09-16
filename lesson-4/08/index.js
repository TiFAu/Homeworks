//8. fullName
//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
for (let x in persons){
    let keysx = Object.keys(persons[x])
    if (keysx.indexOf ("fathername")!=-1 ){
        persons[x]['fullName'] = `${persons[x]['name']} ${persons[x]['fathername']} ${persons[x]['surname']}` 
    }
}
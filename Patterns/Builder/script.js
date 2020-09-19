class Address {
        constructor(zip,street){
        this.zip = zip
        this.street = street
    }
}

class User{//                  default value 
    constructor (name,{ age = '16' , phone = "xxxxxxxx", address = 'xxxx/xxxx'} = {}){
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address 
    }
}

// change these numbers if something doesnt work
let user = new User('BOB', {age: 10, phone: 082455, address: new Address(1,"rooi")})
console.log(user)


// class User {
//     constructor(name, age, phone, address){
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }
// const user = new User("") // this is take from the input field
// alert(user)
class User {
    constructor(id,username,password){
        this.id = id
        this.username = username
        this.password = password
    }
    hasAccess(){
        return this.username === "Kevin"
    }
}

class NullUser {
    constructor(){
        this.id = -1
        this.username = 'Guest'
        this.password = password
    }
    hasAccess(){
        return false
    }
}

const users = [
    new User(1,'Kevin'),
    new User(2,'Claudia')
]

function getUser(id){
    const user = users.find(user => user.id === id)
    if(user == null){
        return new NullUser()
    } else {
        return user
    }
}
function printUser(id){
    const user = getUser(id)
    console.log('Hello ' + user.username)
    if(user.hasAccess()){
        console.log('You have Acces ')
    } else {
        console.log('You are not Authorised.')
    }
}

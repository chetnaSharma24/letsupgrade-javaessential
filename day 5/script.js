let a = prompt("enter number");



var arr = new Array(a);

for (var i = 0; i < a; i++) {
    arr[i] = i;
}
console.log(arr);
let odd=arr.filter(el=>el%2!=0);
{ return el**3;

}
console.log(odd);


class user{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=lucoins;
    }
    login(){
        console.log(`${this.name} has logged in`);
           }
    logout(){
         console.log(`${this.name} has logged out`);

    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`)
    }
}
let user1=new user('dilip',25,'dilip@gmail.com');

let user2=new user('dilip',25,'dilip@gmail.com');
let mod=new moderator('dilip',25,'dilip@gmail.com','moderator');
let admin=new admin('dilip',25,'dilip@gmail.com');

user1.login();
let users=[user1,user2,mod,admin];
class moderator extends user{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role=role;
    }
    deleteuser(user){
        users=users.filter(u=>{
            return u.email != user.email;
        })
    }
}
class admin extends moderator{
    addcourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}
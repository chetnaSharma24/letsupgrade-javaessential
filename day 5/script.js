let a = prompt("enter number");



var arr = new Array(a);

for (var i = 0; i < a; i++) {
    arr[i] = i;
}
console.log(arr);
let odd=arr.filter(el=>el%2!=0).map(el=>el**3);

console.log(odd);

//
class user{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
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


class moderator extends user{
    
    deleteuser(userr){
        users=users.filter(u=>{
            return u.email != userr.email;
        })
    }
}
class admin extends moderator{
    addcourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}
let user1=new user('dip',25,'dip@gmail.com');

let user2=new user('di',25,'d@gmail.com');


user1.login();
let mod=new moderator('a',25,'lip@gmail.com','moderator');
let admi=new admin('b',25,'dsp@gmail.com');
let users=[user1,user2,mod,admi];
admi.login();
mod.deleteuser(user1);




//q3 i am not able to attempt, it will really be helpful sir if you could explain this

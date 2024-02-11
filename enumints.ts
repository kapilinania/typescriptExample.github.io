// enum  in typescript

// user1 = login => normal user
// user2 = login => admin user
//enum is type in typescrip
enum  roles {
    user = "user",
    admin = "admin"
} 


type LoginDeatails = {
 name?:string;
 emailId:string;
 password:string;
 role: roles
}

const firstUser:LoginDeatails ={
    emailId:"kapil@gmail.com",
    password :"skdsnfskl",
    role:roles.admin,
}

const seconduser:LoginDeatails ={
    emailId:"kanika@gmail.com",
    password :"skdsnfskl",
    role:roles.user,
}

const IsAdmin = (user:LoginDeatails) =>{
    const {emailId , role} = user;
    return role ==="admin"?`${emailId} is allow to edit the website`:`${emailId} is not  allow to edit the website`

}
console.log(IsAdmin(firstUser))
console.log(IsAdmin(seconduser))

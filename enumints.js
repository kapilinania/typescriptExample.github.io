// enum  in typescript
// user1 = login => normal user
// user2 = login => admin user
//enum is type in typescrip
var roles;
(function (roles) {
    roles["user"] = "user";
    roles["admin"] = "admin";
})(roles || (roles = {}));
var firstUser = {
    emailId: "kapil@gmail.com",
    password: "skdsnfskl",
    role: roles.admin,
};
var seconduser = {
    emailId: "kanika@gmail.com",
    password: "skdsnfskl",
    role: roles.user,
};
var IsAdmin = function (user) {
    var emailId = user.emailId, role = user.role;
    return role === "admin" ? "".concat(emailId, " is allow to edit the website") : "".concat(emailId, " is not  allow to edit the website");
};
console.log(IsAdmin(firstUser));
console.log(IsAdmin(seconduser));

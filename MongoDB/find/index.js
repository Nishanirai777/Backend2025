const mongoose = require('mongoose');
//let url ="https://localhost:8080/users"
main()
.then((res)=>{
    console.log("connection sucessful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
});
const User =mongoose.model("User",userSchema);
User.find({age:{$gt:47}})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
// const emplyoee= mongoose.model("Emplyoee",userSchema);

//insert many
//User.insertMany([
    //{
       // name:"tony",email:"tony@gmail.com",age:50
    //},
    //{
     //   name:"peter",email:"peter@gmail.com",age:30
    //},
    //{
       // name:"Bruce",email:"bruce@gmail.com",age:40
    //},
//])
//.then((res)=>{
    //console.log(res);
//});
//to find only one user we use
thisUser.findOne({_id:"68021a00aae5b9ffaf2612dc"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
//another is find by id
User.findById({age:{$gt:47}})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

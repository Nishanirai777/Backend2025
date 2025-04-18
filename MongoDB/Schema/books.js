const mongoose = require('mongoose');
//let url ="https://localhost:8080/users"
main()
    .then((res) => {
        console.log("connection sucessful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazonn');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    author:{
        type:String,
    },
    price:{
        type: Number,
    },
});
const Book =mongoose.model("book",bookSchema);
let book1 = new Book({
    title: "i don't love anymore",
    author: "Nishani Rai",
    price: 1000,
});
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
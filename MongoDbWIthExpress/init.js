const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("connection sucessful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/facebook');
}
let allChats = [
    {
        form: "nisha",
        to: "saraj",
        msg: "i miss you",
        created_at: new Date(),
    },
    {
        form: "saraj",
        to: "nisha",
        msg: "i miss you too",
        created_at: new Date(),
    },
    {
        form: "maite",
        to: "sabita",
        msg: "i love you",
        created_at: new Date(),
    },
    {
        form: "sabita",
        to: "maite",
        msg: "i love you too",
        created_at: new Date(),
    },
];
Chat.insertMany(allChats);



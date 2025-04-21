const express = require("express");
const app = express();
const mongoose = require("mongoose");

const listing = require("../module/listing.js");
main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
}
app.get("/", (req, res) => {
    res.send("hi,i am root");
});
app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title:"My New Villa",
        description:"By the forest",
        price:1500,
        location:"sindhuli,gadi",
        country: "Nepal",
});
 await sampleListing.save();
console.log("sample was saved");
res.send("sucessful testing");
});


app.listen(3131, () => {
    console.log("server is working to port 3131");
});

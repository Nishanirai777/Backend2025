const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,
    image: {
        type: String,
        default:"https://unsplash.com/photos/woman-wakes-up-in-a-bright-bedroom-A-pnaslNWk0",
       
            set: (v) => v === "" ? "https://unsplash.com/photos/woman-wakes-up-in-a-bright-bedroom-A-pnaslNWk0" : v,

    },
price: Number,
    location: String,
        country: String,
});
const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
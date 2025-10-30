const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    email: String,
    age: Number,
    adresse: {
        rue: String,
        ville: String,
        pays: String
    },
    avatar: String
});

module.exports = mongoose.model("User", userSchema);

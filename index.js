const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();
const port = 8080;

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.error("Erreur de connexion MongoDB :", err));

app.use("/api/users", userRoutes);

app.listen(port, "0.0.0.0", () => {
    console.log(`Serveur lancé sur le port ${port}`);
});

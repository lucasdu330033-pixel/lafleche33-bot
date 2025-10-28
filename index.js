import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("Erreur MongoDB:", err));

// Page d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur Lafleche33 Boutique 🚀");
});

app.listen(PORT, () => console.log(`Serveur en ligne sur le port ${PORT}`));

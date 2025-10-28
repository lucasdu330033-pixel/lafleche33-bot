import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connexion à la base MongoDB
connectDB();

// Page d’accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur Lafleche33 Boutique 🛍️");
});

// Exemple de route API pour produits (à compléter plus tard)
app.get("/api/produits", (req, res) => {
  res.json([
    { id: 1, nom: "Parfum exclusif", prix: 49.99 },
    { id: 2, nom: "T-shirt Lafleche33", prix: 29.99 },
  ]);
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur actif sur le port ${PORT}`));

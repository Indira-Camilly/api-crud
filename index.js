import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import dotenv from "dotenv";

// Configurar o dotenv
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use("/", userRoutes);

// Porta definida no arquivo .env
const PORT = process.env.PORT || 8800;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

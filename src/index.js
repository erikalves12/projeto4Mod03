require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const usersRoutes = require("./users/users.routes");
const authRoutes = require("./auth/auth.route");
const personagemRoute = require("./personagem/personagem.routes");
const swaggerRoutes = require("./swagger/swagger.routes");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/characters", personagemRoute);
app.use("/api-docs", swaggerRoutes);

app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta ${port} `);
});

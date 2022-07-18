require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const usersRoutes = require("./users/users.routes");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use("/users", usersRoutes);
app.use(express.json());

app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta ${port} `);
});

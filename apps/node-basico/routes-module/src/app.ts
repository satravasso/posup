import express from "express";

import blogRoutes from "./routes/blog";

const defaultPort = 5000;
const app = express();

app.use("/blog", blogRoutes);

app.listen(defaultPort, () => {
  console.log(`Aplicação rodando na porta ${defaultPort}`);
});

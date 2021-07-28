import express from "express";
import { Request, Response } from "express";

const defaultPort = 5000;
const app = express();

let blogs: Blog[] = [
  {
    id: 1,
    name: "Primeiro post",
    slug: "primeiro-post",
    content: "<h1>Olá mundo!</h1>",
  },
];

// Cria novo post
app.post("/blog", (req: Request, res: Response<Blog>) => {
  const { post } = req.body;

  blogs.push(post);

  res.status(200).json(post);
});

// Recupera todos os posts
app.get("/blog", (_: Request, res: Response<Blog[]>) => {
  res.status(200).json(blogs);
});

// Recupera post específico
app.get("/blog/:id", (req: Request, res: Response<Blog>) => {
  const { id } = req.params;

  const foundBlog = blogs.filter((blog) => blog.id === Number(id));

  if (foundBlog) {
    res.status(200).json(foundBlog[0]);
  } else {
    res.status(404).json();
  }
});

// Atualiza id específico
app.put("/blog/:id", (req: Request, res: Response<Blog>) => {
  const { id } = req.params;
  const { post } = req.body;

  const blogIndex = blogs.findIndex((blog) => blog.id === Number(id));
  blogs[blogIndex] = post;

  if (blogs[blogIndex]) {
    res.status(200).json(blogs[blogIndex]);
  } else {
    res.status(404).json();
  }
});

// Deleta id específico
app.delete("/blog/:id", (req: Request, res: Response<Blog>) => {
  const { id } = req.params;

  const blogIndex = blogs.findIndex((blog) => blog.id === Number(id));
  const oldContent = blogs[blogIndex];
  const arrWithoutId = blogs.filter((blog) => blog.id !== Number(id));
  blogs = arrWithoutId;

  if (arrWithoutId) {
    res.status(200).json(oldContent);
  } else {
    res.status(404).json();
  }
});

app.listen(defaultPort, () => {
  console.log(`Aplicação rodando na porta ${defaultPort}`);
});

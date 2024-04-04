import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Bloging krenge vro!");
});

app.post("/api/v1/signup", (c) => {
  return c.text("Sign up Route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Sign in Route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Blog Post Route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Blog Update Route");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("Get Blog Route");
});

export default app;

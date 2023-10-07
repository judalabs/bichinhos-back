import Fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { handleAnimais } from "./app/routes/animal-route";
import { handleUsuarios } from "./app/routes/user-route";

const app = Fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(handleAnimais);
app.register(handleUsuarios);

app
  .listen({
    port: 3333,
  })
  .then((andress) => {
    console.log(`Server is running on ${andress}`);
  });

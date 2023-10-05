import Fastify from "fastify";
const app = Fastify();

app.use(animal);

app.listen("3000");

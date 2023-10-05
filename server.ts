import express from "express";
import handleGet from "./handle-get";

const app = express();

console.log("Running bichinhos");
app.get("/", handleGet);
app.listen("3000");

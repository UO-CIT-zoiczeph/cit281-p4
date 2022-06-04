/*
    CIT 281 Project 4
    Name: Zoe Turnbull
*/

/* VARIABLES & IMPORTS */
const fastify = require("fastify")();
const fs = require("fs");

/* REQUESTS */
fastify.get("/", (request, reply) => {
  reply.code(200).header("Content-Type", "text/html; charset=utf-8");
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      console.log(err);
      reply.code = 500;
      reply.header("Content-Type", "text/html; charset=utf-8");
      reply.send("Error processing request");
    } else {
      reply.code = 200;
      console.log("URL: ", request.url);
      reply.header("Content-Type", "text/html; charset=utf-8");
      reply.send(data);
    }
  });
});

/* START SERVER, LISTEN TO REQUESTS */
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

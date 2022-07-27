const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.execute();

// Codigo que no usa CLASES
// // Servidor de Express
// const express = require("express");
// const app = express();

// // Servidor Sockets
// const server = require("http").createServer(app);

// // Configuracion del socket  server
// const io = require("socket.io")(server);

// // Desplegar el directorio publico
// app.use(express.static(__dirname + "/public"));

// // para enviar datos a todos los dispositivos
// io.on("connection", (socket) => {
//   // Escuchando valores del formulario
//   socket.on("mensaje-to-server", (data) => {
//     console.log(data);

//     // socket.emit enviara la otificacion solo a la pagina o dispositivo
//     // cambiar a io para todos los clientes
//     io.emit("mensaje-from-server", data);
//   });
//   // Para emitir informacion
//   /*  socket.emit("mensaje-bienvenida", {
//     msg: "Bienvenido al server user",
//     fecha: new Date(),
//   }); */

//   // para escuchar mensajes del index
//   // socket.on("mensaje-cliente", (data) => {
//   //   console.log(data);
//   // });
// });

// server.listen(8080, () => {
//   console.log(`Server corriendo en puerto :8080`);
// });

// Servidor de Express
const express = require("express");
// Servidor Sockets
const http = require("http");
//import socket
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de Sockets
    // Configuracion del socket  server
    this.io = socketio(this.server, {
      /* configuraciones*/
    });
  }

  middlewares() {
    // Desplegar el directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // inicializar Middlewares
    this.middlewares();

    // Inicializar Sockets
    this.configurarSockets();

    // Incializar server
    this.server.listen(this.port, () => {
      console.log(`Server corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;

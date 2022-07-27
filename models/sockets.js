class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On Conection
    this.io.on("connection", (socket) => {
      // Escuchando valores del formulario
      socket.on("mensaje-to-server", (data) => {
        console.log(data);
        // socket.emit enviara la otificacion solo a la pagina o dispositivo
        // cambiar a io para todos los clientes
        this.io.emit("mensaje-from-server", data);
      });

      // Para emitir informacion
      /*  socket.emit("mensaje-bienvenida", {
        msg: "Bienvenido al server user",
        fecha: new Date(),
      }); */
      // para escuchar mensajes del index
      // socket.on("mensaje-cliente", (data) => {
      //   console.log(data);
      // });
    });
  }
}

module.exports = Sockets;

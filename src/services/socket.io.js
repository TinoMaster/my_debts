import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Cambia la URL según tu configuración

const subscribeToEvent = (eventName, callback) => {
  socket.on(eventName, callback);
};

const emitEvent = (eventName, data) => {
  socket.emit(eventName, data);
};

export { subscribeToEvent, emitEvent };

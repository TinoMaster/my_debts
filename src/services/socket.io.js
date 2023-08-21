import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Cambia la URL según tu configuración

const userSocketConnected = (userId) => {
  const data = {
    userId,
  };
  socket.emit("connected", data);
};

const subscribeToEvent = (eventName, callback) => {
  socket.on(eventName, callback);
};

/* const unsubscribeToEvent = (eventName) => {
  socket.disconnect(eventName);
}; */

const emitEvent = (eventName, data) => {
  socket.emit(eventName, data);
};

export { subscribeToEvent, emitEvent, userSocketConnected/* , unsubscribeToEvent */ };

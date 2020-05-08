const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

mongoose.connect(
  'mongodb://localhost:27017/FormareChat',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    
    console.log('Base de dados conectada.');
  }
);

io.on('connection', (socket) => {
  const { username } = socket.handshake.query;

  console.log('Nova conexão:', username, socket.id);

  socket.emit('connected_user', username);

  socket.on('disconnect', () => {
    socket.emit('disconnected_user', username);
  });
});

app.use((request, _response, next) => {
  request.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(27017, console.log('Servidor rodando na porta 27017.'));
import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';

import './styles.css';

export default function Chat() {
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');
  const socket = useMemo(() => socketio.connect('http://localhost:27017', {
    query: {
      username,
    }
  }), [username]);

  useEffect(() => {
    socket.on('connected_user', (user) => {
      setConnectedUsers([...connectedUsers, user]);
    });
  }, [connectedUsers, socket]);

  useEffect(() => {
    socket.on('new_message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('/messages');

      const { messages: apiMessages } = response.data;

      setMessages(apiMessages);
    }

    loadMessages();
  });

  async function handleSubmit() {
    const response = await api.post('/messages', {
      content
    }, {
      headers: {
        authorization: userId,
      }
    });

    const { message: apiMessage } = response.data;

    setContent('');

    setMessages([...messages, apiMessage]);
  }

  return (
    <div className="chat-container">
      <aside className="connected-users">
        <p>Usuários conectados:</p>

        <ul>
        { connectedUsers.map((user) => (
          <li key={user}>
            <strong>{user}</strong>
          </li>
        ))}
        </ul>
      </aside>

      <section className="chat-content">
        <article className="messages">
          <ul>
            { messages.map((message) => (
              <li
                key={message._id}
                className={message.user._id === userId ? 'logged' : ''}
              >
                <p className="message-header">
                  {message.createdAt} - <strong>{message.user.username}</strong> - Hora
                </p>

                <p className="message-content">
                  {message.content}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <div className="input-group">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button className="send" onClick={handleSubmit}>Enviar</button>
        </div>
      </section>
    </div>
  );
}
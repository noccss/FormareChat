import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login ({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { username });

        const { user } = response.data;

        localStorage.setItem('username', username);
        localStorage.setItem('userId', user._id);

        history.push('/chat');
    }

    return (
        <div className="login-container">
            <form className="form"onSubmit={handleSubmit}>
                <span className="welcome">Bem vindo ao Formare Chat</span>
                <input 
                    type="text"
                    className="inp"
                    placeholder="Digite seu nome de usuario"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />

                <button type="submit" className="btn">Entrar</button>

                <Link to="/loginConsultor" className="link">
                    Caso seja um consultor, clique aqui
                </Link>
            </form>
        </div>
    );
}
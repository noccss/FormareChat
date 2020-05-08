import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function LoginConsultor({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await api.post('./consultor', { username, password });

        const { consultor } = res.data;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('consultorId', consultor._id);

        history.push('/group');
    }

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <span className="welcome">Bem vindo ao Formare Chat</span>
                <input
                    type="text"
                    className="inp"
                    placeholder="Digite seu nome de usuario"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    className="inp"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit" className="btn">Entrar</button>

                <Link to="/" className="link">
                    Caso seja um usuário, clique aqui
                </Link>
            </form>
        </div>
    )
}
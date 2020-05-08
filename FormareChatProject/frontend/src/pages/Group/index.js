import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Group () {
    return(
        <div className="profile-container">

                <h1>Escolha uma sala</h1>

                <ul>
                    <li>
                        <span className="title">Sala 1</span>
                        <strong>Usuario1</strong>
                        <strong>Usuario2</strong>
                        <strong>Usuario3</strong>
                        <strong>Usuario4</strong>

                        <Link className="button" to="/chat">
                            Entre aqui
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="title">Sala 2</span>
                        <strong>Usuario21</strong>
                        <strong>Usuario22</strong>
                        <strong>Usuario23</strong>
                        <strong>Usuario24</strong>

                        <Link to="/chat" className="button">
                            Entre aqui
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="title">Sala 3</span>
                        <strong>Usuario31</strong>
                        <strong>Usuario32</strong>
                        <strong>Usuario33</strong>
                        <strong>Usuario34</strong>

                        <Link to="/chat" className="button">
                            Entre aqui
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="title">Sala 4</span>
                        <strong>Usuario41</strong>
                        <strong>Usuario42</strong>
                        <strong>Usuario43</strong>
                        <strong>Usuario44</strong>

                        <Link to="/chat" className="button">
                            Entre aqui
                        </Link>
                    </li>
                </ul>
            </div>
    );
}
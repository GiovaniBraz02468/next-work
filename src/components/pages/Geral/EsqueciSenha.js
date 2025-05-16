import logo from '../../../Logo_Full.webp';
import React, { useState } from 'react';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

export default function EsqueciSenha() {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className={styles.divcenter}>
                <div className='text-center'>
                    <picture>
                        <img className={styles.imagem} src={logo}></img>
                    </picture>
                </div>
                <div className={`${styles.divtexto} text-center`}>
                    <h4>Esqueci a senha</h4>
                    <p>Todos os logins são gerados pela instituição de ensino</p>
                </div>
                <div className={`${styles.divfrm} text-center`}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                        <input type="email"
                            name='email'
                            class="form-control"
                            placeholder="Digite o email"
                            aria-label="Email"
                            aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='text-center'>
                    <button type="button" class="btn-laranja">Enviar senha provisória</button>
                </div>
                <div className={`${styles.divSenha} text-center`}>
                    <p><a href='/'>Lembrei a senha</a></p>
                </div>
            </div>
        </div>
    )
}
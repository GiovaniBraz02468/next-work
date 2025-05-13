import logo from '../../../Logo_Full.webp';
import React, { useState } from 'react';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className={styles.divcenter}>
        <div className='text-center'>
          <picture>
            <img className={styles.imagem} src={logo}></img>
          </picture>
        </div>
        <div className={`${styles.divtexto} text-center`}>
          <h4>Login</h4>
          <p>Todos os logins são gerados pela instituição de ensino</p>
        </div>
        <div className={`${styles.divfrm} text-center`}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
            <input type="email"
              name='email'
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            >
            <i className={`bi ${isPasswordVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
            </span>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name='senha'
              className="form-control"
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className='text-center'>
          <button onClick={() => navigate("/admhome")} type="button" class="btn-laranja">Adm home</button>
          <button onClick={() => navigate("/admaluno")} type="button" class="btn-laranja">Adm aluno</button>
          <button onClick={() => navigate("/admprofessor")} type="button" class="btn-laranja">adm professor</button>
          <button onClick={() => navigate("/admperfil")} type="button" class="btn-laranja">adm perfil</button>
          <button onClick={() => navigate("/admcurso")} type="button" class="btn-laranja">adm curso</button>
        </div>
        <div className={`${styles.divSenha} text-center`}>
          <p><a href='#'>Esqueci a senha</a></p>
        </div>
      </div>
    </div>
  );
}
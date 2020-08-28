import React, { FormEvent } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai";
import { FaBloggerB } from 'react-icons/fa'

import './styles.css';

const Login = () => {
  return(
    <div className="login-form">
      <form action="/sorteiosabertos">
        <div className="form-header">
          <Link id="arrow" to="/">
            <BsArrowLeft />
          </Link>
          <h1 id="login-title">ENTRAR</h1>
        </div>
        <fieldset>
          <div className="field">
            <input 
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-mail"
            />
            <hr></hr>
          </div>
          <div className="field">
            <input 
              type="password"
              name="password"
              id="password"
              required 
              placeholder="Senha"
            />
          </div>

          <h4 id="legend3">ou entre<br></br>com</h4>
          
          <div id="redes-sociais">
            <ul className="logos">
              <li><a href="#"><AiFillTwitterCircle /></a></li>
              <li><a href="#"><FaBloggerB /></a></li>
              <li><a href="#"><AiFillInstagram /></a></li>
              <li><a href="#"><AiFillFacebook /></a></li>
              </ul>
          </div>
        </fieldset>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

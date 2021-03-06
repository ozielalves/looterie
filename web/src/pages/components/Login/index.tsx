import React, { FormEvent, useState, ChangeEvent } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai";
import { FaBloggerB } from 'react-icons/fa'

import './styles.css';

const Login = ({toggle}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleImputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value} = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmition(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formData;
    
    const data = {
      email,
      password
    }

    console.log(data);

    //await api.post('points', data);

    alert(`Bem-Vindo ${data.email}`);
  }

  return(
    <div className="login-form">
      <form onSubmit={handleSubmition}>
        <div className="form-header">
          <div id="arrow" onClick={toggle}>
            <BsArrowLeft />
          </div>
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
              <li><a href="/"><AiFillTwitterCircle /></a></li>
              <li><a href="/"><FaBloggerB /></a></li>
              <li><a href="/"><AiFillInstagram /></a></li>
              <li><a href="/"><AiFillFacebook /></a></li>
              </ul>
          </div>
        </fieldset>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

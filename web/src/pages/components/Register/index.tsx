import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai";
import { FaBloggerB } from 'react-icons/fa';
import api from '../../../services/api'

import './styles.css';

const Register = ({toggle}) => {
/* 
  useEffect(() => {
    api.get('');
  }, []); */

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })

  function handleImputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value} = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmition(event: FormEvent) {
    event.preventDefault();

    const { name, lastName, email, password } = formData;
    
    const data = {
      name,
      lastName,
      email,
      password
    }
 
    await api.post('users', data)
    .then(toggle());
    
    alert('Cadastro realizado com Sucesso!');
    
  }

  return(
    <div className="register-form">
      <form onSubmit={handleSubmition}>
        <div className="form-header">
          <div id="arrow" onClick={toggle}>
            <BsArrowLeft />
          </div>
          <h1>CADASTRE-SE</h1>
        </div>
        <fieldset>
      
          <h3 id="legend1">Identificação</h3>
          <div className="nameInputs">
            <div className="field">
              <input 
                type="text"
                name="name"
                id="name"
                onChange={handleImputChange}
                placeholder="Nome"
              />
              <hr></hr>
            </div>
            
            <div className="field">
              <input 
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleImputChange}
                placeholder="Sobrenome"
              />
              <hr></hr>
            </div>
          </div>

          <h3 id="legend2">Login</h3>

          <div className="field">
            <input 
              type="email"
              name="email"
              id="email"
              onChange={handleImputChange}
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
              onChange={handleImputChange}
              placeholder="Senha"
            />
            <hr></hr>
          </div>
          <div className="field">
            <input 
              type="password"
              name="password"
              id="password2"
              required 
              onChange={handleImputChange}
              placeholder="Confirmar senha"
            />
          </div>

          <h4 id="legend3">ou cadastre-se<br></br>com</h4>
          
          <div id="redes-sociais">
            <ul className="logos">
              <li><a href="/"><AiFillTwitterCircle /></a></li>
              <li><a href="/"><FaBloggerB /></a></li>
              <li><a href="/"><AiFillInstagram /></a></li>
              <li><a href="/"><AiFillFacebook /></a></li>
              </ul>
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
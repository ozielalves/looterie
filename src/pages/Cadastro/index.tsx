import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai";
import { FaBloggerB } from 'react-icons/fa'

import './styles.css';

import logo from '../../assets/Logo.png';



const Cadastro = () => {

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

    console.log(data);

    //await api.post('points', data);

    alert('Cadastro realizado com Sucesso!');
  }

  return(
    <div id="page-cadastro">
      <div className="content">
        <div className="bloco">
          <img id="logo" src={logo} alt="Loterie"/>

          <form onSubmit={handleSubmition}>
            <div className="form-header">
              <Link id="arrow" to="/">
                <BsArrowLeft />
              </Link>
              <h1>CADASTRE-SE</h1>
            </div>
            <fieldset>
          
              <h3 id="legend1">Identificação</h3>
              
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
                  <li><a href="#"><AiFillTwitterCircle /></a></li>
                  <li><a href="#"><FaBloggerB /></a></li>
                  <li><a href="#"><AiFillInstagram /></a></li>
                  <li><a href="#"><AiFillFacebook /></a></li>
                  </ul>
              </div>
            </fieldset>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
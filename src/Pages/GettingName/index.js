import React, { useState, useEffect } from 'react';

import Input from '../../Components/Input';
import ButtonSubmit from '../../Components/ButtonSubmit';

import './styles.css';

export default function GettingName(props) {

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    let user = localStorage.getItem('username');
    if (user !== undefined || user !== null) {
      localStorage.removeItem('username');
    }
  }, []);

  function handleSaveUsernameOnLocal(e) {
    e.preventDefault();

    if (username === undefined || username === null || username.length <= 0) {
      setErrors('Por favor inserir um nome');
      return;
    }

    localStorage.setItem('username', username);
    props.history.push('menu-chat');
  }

  return (
    <div className="area-create-card">
      <div className="card">
        <form className="information" onSubmit={e => handleSaveUsernameOnLocal(e)}>
          <span className="error-area">{errors}</span>
          <Input type="text" placeholder="Digite seu nome de usuário!" onChange={e => setUsername(e.target.value)} />
          <ButtonSubmit text="Create Chat" type="submit" background="f6583a" borderBottom="d54e34" />
        </form>
      </div>
    </div>
  );
}

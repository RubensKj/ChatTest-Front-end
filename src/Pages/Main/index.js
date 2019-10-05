import React, { useState, useEffect } from 'react';

import HeaderCard from '../../Components/HeaderCard';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import ButtonRollback from '../../Components/ButtonRollback';
import { CHAT_MODEL } from '../../Container/INITIAL_STATES';

import api from '../../Services/api';

import './styles.css';

export default function Main(props) {

  // STATES

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [chat, setChat] = useState(CHAT_MODEL);

  // CHECK IF CONTAINS USERNAME, AND SET IT.

  useEffect(() => {
    let user = localStorage.getItem('username');
    if (user === undefined || user === null) {
      props.history.push('/');
    } else {
      setUsername(user);
    }
  }, [props.history]);

  // FUNCTIONS

  async function handleCreateChat() {
    let users = chat.users;

    if ((users !== undefined || users !== null) && !users.includes(username)) {
      setChat({ ...chat, users: [...chat.users, username] })
    } else {
      setChat({ ...chat });
    }

    await api.post('/chat', JSON.stringify(chat)).then(res => {
      props.history.push(`/chat/${res.data.id}`);
    });
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="area-card">
      <div className="card">
        {!isOpen ? (
          <>
            <HeaderCard />
            <div className="actions-area">
              <Button text="Create Chat" onClick={handleCreateChat} background="f6583a" borderBottom="d54e34" />
              <Button text="Find a Chat" onClick={handleOpen} background="f5703b" borderBottom="d86233" />
            </div>
          </>
        ) : (
            <>
              <ButtonRollback onClick={handleOpen} />
              <HeaderCard />
              <div className="information-area">
                <Input type="number" placeholder="Digite o número do chat" />
                <Button text="Find a Chat" onClick={null} background="f5703b" borderBottom="d86233" />
              </div>
            </>
          )}
      </div>
    </div>
  );
}

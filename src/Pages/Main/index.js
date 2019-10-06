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

  // Find by id
  const [isOpen, setIsOpen] = useState(false);

  // Username from user that was set in the first page.
  const [username, setUsername] = useState('');

  // Chat state
  const [chat, setChat] = useState(CHAT_MODEL);

  // Input to get the chat id
  const [chatID, setChatID] = useState('');

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
    setChat({ ...chat, users: [...chat.users, username] })

    await api.post('/chat', JSON.stringify(chat)).then(res => {
      props.history.push(`/chat/${res.data.id}`);
    });
  }

  async function findChatById(e) {
    e.preventDefault();

    if (chatID.length <= 0) {
      return;
    }

    await api.post(`/chat/${chatID}`, username).then(res => {
      props.history.push(`/chat/${chatID}`);
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
                <Input type="number" onChange={e => setChatID(e.target.value)} placeholder="Digite o número do chat" />
                <Button text="Find a Chat" onClick={e => findChatById(e)} background="f5703b" borderBottom="d86233" />
              </div>
            </>
          )}
      </div>
    </div>
  );
}

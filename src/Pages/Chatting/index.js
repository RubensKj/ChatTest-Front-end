import React, { useState, useEffect } from 'react';

import Input from '../../Components/Input';

import { CHAT_MODEL } from '../../Container/INITIAL_STATES';
import api from '../../Services/api';

import './styles.css';

export default function Chatting(props) {

  const [chat, setChat] = useState(CHAT_MODEL);

  async function callChatFromAPI(id) {
    await api.get(`/chat/${id}`).then(res => {
      console.log(res.data);
      setChat(res.data);
    });
  }

  useEffect(() => {
    if (props.match.params.id !== undefined && props.match.params.id !== null) {
      callChatFromAPI(props.match.params.id);
    } else {
      props.history.push('menu-chat');
    }
  }, [props.match.params.id, props.history]);


  // SEND MESSAGE

  async function sendMessage(e) {
    e.preventDefault();
  }

  return (
    <div className="area-card-chat">
      <div className="card-chat">
        <div className="header-chats">
          <div className="people-from-chat">
            {chat.users.forEach(user => <span>{user},</span>)}
          </div>
        </div>
        <div className="chat-area">
          <div id="area-to-chat-appear" className="area">
            <div className="user-message">
              <span className="user-username">Gustavo Martins</span>
              <span className="message">Messagem do gustavo para testar o css! aumentando o texto para visibilidade</span>
            </div>
            <div className="my-message">
              <span className="my-username">RubensKj</span>
              <span className="message">Minha messagem para testar o css! aumentando o texto para visibilidade</span>
            </div>
          </div>
          <form className="to-send-message" onSubmit={e => sendMessage(e)}>
            <Input type="text" placeholder="Leave your message here" />
            <div className="button-send">
              <span>Send</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

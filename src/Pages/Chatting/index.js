import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

import Input from '../../Components/Input';

import { CHAT_MODEL } from '../../Container/INITIAL_STATES';
import api from '../../Services/api';

import './styles.css';

export default function Chatting(props) {

  const [chat, setChat] = useState(CHAT_MODEL);

  // Username from localStorage
  const [usernameLogged, setUsernameLogged] = useState('');

  // Message from input
  const [messageFromInput, setMessageFromInput] = useState('');

  async function callChatFromAPI(id, history) {
    await api.get(`/chat/${id}`).then(res => {
      setChat(res.data);
      var elem = document.getElementById('area-to-chat-appear');
      elem.scrollTop = elem.scrollHeight;
    }).catch(err => {
      switch(err.message) {
        case 'Request failed with status code 500':
          return history.push('/menu-chat');
        default:
          return;
      }
    });
  }

  useEffect(() => {
    if (props.match.params.id !== undefined && props.match.params.id !== null) {
      callChatFromAPI(props.match.params.id, props.history);
      setUsernameLogged(localStorage.getItem('username'));
    } else {
      props.history.push('menu-chat');
    }
  }, [props.match.params.id, props.history]);

  useEffect(() => {
    const pusher = new Pusher('55323f709121b5910325', {
      cluster: 'us2',
      encrypted: true
    });
    const channel = pusher.subscribe('chat-' + props.match.params.id);
    channel.bind('new-message', data => {
      setChat(data.chat);
      var elem = document.getElementById('area-to-chat-appear');
      elem.scrollTop = elem.scrollHeight;
    });
  }, [props.match.params.id])


  // SEND MESSAGE

  async function sendMessage(e) {
    e.preventDefault();

    if (props.match.params.id !== undefined || props.match.params.id !== null) {
      let ObjectToAPI = {
        message: messageFromInput,
        username: usernameLogged,
      }

      await api.post(`/chat-message/${props.match.params.id}`, JSON.stringify(ObjectToAPI)).then(res => {
        setChat(res.data);
      });
    }
    setMessageFromInput('');
  }

  return (
    <div className="area-card-chat">
      <div className="card-chat">
        <div className="header-chats">
          <div className="people-from-chat">
            {chat.users.map(user => <span key={user}>{user},</span>)}
          </div>
        </div>
        <div className="chat-area">
          <div id="area-to-chat-appear" className="area">
            {chat.messages.map(message => {
              if (message.username === usernameLogged) {
                return (
                  <div className="my-message" key={message.id}>
                    <span className="my-username">{message.username}</span>
                    <span className="message">{message.message}</span>
                  </div>
                )
              } else {
                return (
                  <div className="user-message" key={message.id}>
                    <span className="user-username">{message.username}</span>
                    <span className="message">{message.message}</span>
                  </div>
                )
              }
            })}
          </div>
          <form className="to-send-message" onSubmit={e => sendMessage(e)}>
            <Input type="text" value={messageFromInput} onChange={e => setMessageFromInput(e.target.value)} placeholder="Leave your message here" />
            <button className="button-send">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

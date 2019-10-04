import React from 'react';

import Input from '../../Components/Input';
import ButtonHref from '../../Components/ButtonHref';

import './styles.css';

export default function CreateChat() {
  return (
    <div className="area-create-card">
      <div className="card">
        <div className="information">
          <Input type="text" placeholder="Digite seu nome de usuário!" />
          <ButtonHref href="/create-chat" text="Create Chat" background="f6583a" borderBottom="d54e34" />
        </div>
      </div>
    </div>
  );
}

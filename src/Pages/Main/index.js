import React, { useState } from 'react';

import HeaderCard from '../../Components/HeaderCard';
import Button from '../../Components/Button';
import ButtonHref from '../../Components/ButtonHref';
import Input from '../../Components/Input';
import ButtonRollback from '../../Components/ButtonRollback';

import './styles.css';

export default function Main() {

  const [isOpen, setIsOpen] = useState(false);

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
              <ButtonHref href="/create-chat" text="Create Chat" background="f6583a" borderBottom="d54e34" />
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

import React from 'react';

import './styles.css';

export default function ButtonRollback({ onClick }) {
  return (
    <div className="button-area-rollback" role="button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M15 18l-6-6 6-6" /></svg>
      <span>Voltar</span>
    </div>
  );
}

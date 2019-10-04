import React from 'react';

import './styles.css';

export default function Button({ text, onClick, background, borderBottom }) {
  return (
    <div className="button" role="button" onClick={onClick} style={{ background: '#' + background, borderBottom: '3px solid #' + borderBottom}}>
      <span>{text}</span>
    </div>
  );
}

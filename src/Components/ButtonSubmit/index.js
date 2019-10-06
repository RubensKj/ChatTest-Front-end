import React from 'react';

import './styles.css'

export default function ButtonSubmit({ text, type, background, borderBottom }) {
  return (
    <button className="button-submit" type={type} style={{ background: '#' + background, borderBottom: '3px solid #' + borderBottom }}>
      <span>{text}</span>
    </button>
  );
}

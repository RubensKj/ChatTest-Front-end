import React from 'react';

import './styles.css';

export default function Input({ onChange, value, type, placeholder }) {
  return (
    <div className="input-area">
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
}

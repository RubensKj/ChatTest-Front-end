import React from 'react';

import './styles.css';

export default function ButtonHref({ href, onClick, text, background, borderBottom }) {
  return (
    <a href={href} onClick={onClick} className="button-href" role="button" style={{ background: '#' + background, borderBottom: '3px solid #' + borderBottom }}>
      <span>{text}</span>
    </a>
  );
}

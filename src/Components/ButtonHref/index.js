import React from 'react';

import './styles.css';

export default function ButtonHref({ href, text, background, borderBottom }) {
  return (
    <a href={href} className="button-href" role="button" style={{ background: '#' + background, borderBottom: '3px solid #' + borderBottom }}>
      <span>{text}</span>
    </a>
  );
}

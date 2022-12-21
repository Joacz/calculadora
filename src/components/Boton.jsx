import React from 'react';

export const Boton = (props) => {
  return (
    <button id={props.children} onClick={props.onClick} className='boton'>
      {props.children}
    </button>
  );
};

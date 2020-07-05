import React from 'react';
import spinnerImg from '../img/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinnerImg}
      alt='Spinner'
      style={{ width: 200, display: 'block', margin: 'auto' }}
    />
  );
};

export default Spinner;

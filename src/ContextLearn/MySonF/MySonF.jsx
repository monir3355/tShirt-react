import React, { useContext } from 'react';
import { RingContext } from '../Dada/Dada';

const MySonF = () => {
  const gold = useContext(RingContext)
  return (
    <div>
      <h3>Myson Female</h3>
      {gold}
    </div>
  );
};

export default MySonF;
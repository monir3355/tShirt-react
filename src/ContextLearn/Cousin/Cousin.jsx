import React, { useContext } from 'react';
import { RingContext } from '../Dada/Dada';

const Cousin = () => {
  const gold = useContext(RingContext)
  return (
    <div>
      <h3>Cousin</h3>
      {gold}
    </div>
  );
};

export default Cousin;
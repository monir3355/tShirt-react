  import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
  
export const RingContext = createContext('gold');
  const Dada = () => {
    return (
      <div>
        <Father></Father>
        <Uncle></Uncle>
      </div>
    );
  };
  
  export default Dada;
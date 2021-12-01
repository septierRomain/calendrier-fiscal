import React from 'react';

import Arrow from '../../Assets/arrow.svg'

function CFE() {
  return(
    <div>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Votre CFE :</ul>
      <p>La cotisation fonciere des entreprise (CFE) est à payer pour le 15 Décembre</p>      
    </div>
  )
}
export default CFE
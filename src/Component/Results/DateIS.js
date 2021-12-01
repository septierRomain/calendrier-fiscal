import React from 'react';

import Arrow from '../../Assets/arrow.svg'

function IS() {
  return(
    <div>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Acompte au 15 Juillet et au 15 Décembre</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Solde d'impot société au plus tard 3 mois aprés votre cloture</ul>      
    </div>
  )
}
export default IS
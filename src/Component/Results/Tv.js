import React, { useContext } from 'react';
import VATContext from '../../Context/VATcontext';

function TV() {

  const {VAT} = useContext(VATContext)

  return(
    <div className='section'>
      <div className="section-title">
        <h5>Redevance télé</h5>
      </div>
      <div className="section-content">
        {
          VAT.isAnnual ?
          <p>La contribution doit être déclarée en même temps que la déclaration de TVA, c'est à dire le 03 Mai.</p>
          :
          <p>La contribution doit être déclarée en même temps que la déclaration de TVA le 25 Avril de chaque année.</p>
        }
      </div>
    </div>
  )
}
export default TV
import React, { useContext } from 'react';
import VATContext from '../../Context/VATcontext';

function TVS() {

  const {VAT} = useContext(VATContext)

  return(
    <div className='section'>
      <div className="section-title">
        <h5>TVS</h5>
      </div>
      <div className="section-content">
        <p>A déclarer et payer au 15 Janvier N+1</p>
        {
          VAT.isAnnual ?
          <p>Il faut remplir le formulaire 2855 papier.</p>
          :
          <p>Il faut déclarer la TVS sur la déclaration de TVA</p>
        }
      </div>
    </div>
  )
}
export default TVS
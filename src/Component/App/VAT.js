import React from 'react';

import {useContext} from 'react';

import VATContext from '../../Context/VATcontext';

function VAT() {
  
  const {
    setNoVAT,
    setIsAnnual,
    setIsMonthly,
    setIsTrimester
  } = useContext(VATContext)

  return (
    <div>
    <h2>Quel est votre régime de TVA ?</h2>
    <div className="select_container">
      <button onClick={()=>setNoVAT(true)} className='select'>Franchise de base</button>
      <button onClick={()=>setIsMonthly(true)} className='select'>Mensuel</button>
      <button onClick={()=>setIsTrimester(true)} className='select'>Trimestriel</button>
      <button onClick={()=>setIsAnnual(true)} className='select'>Simplfiée</button>
    </div>
  </div>
  )
}
export default VAT
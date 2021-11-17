import React from 'react';

import {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import TaxSystem from './TaxSystem';

function Status() {
  
  const {
    setIsIndividual,
    setIsSARL,
    setIsSAS,
    isIndividual,
    isSARL,
    isSAS
  } = useContext(StatusContext)

  return (
    <div>
    <h2>Quel est votre forme juridique ?</h2>
    {isIndividual||isSARL||isSAS ? 
    <TaxSystem /> : 
    <div className="select_container">
    <button onClick={()=>setIsIndividual(true)} className='select'>Auto-Entreprise / Entreprise individuelle</button>
    <button onClick={()=>setIsSARL(true)} className='select'>EURL / SARL</button>
    <button onClick={()=>setIsSAS(true)} className='select'>SAS / SASU</button>
</div> }
    
  </div>
  )
}
export default Status
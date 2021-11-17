import React from 'react';
import { Link } from 'react-router-dom'

import {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';

function Status() {
  
  const {
    setIsIndividual,
    setIsSARL,
    setIsSAS
  } = useContext(StatusContext)

  return (
    <div>
    <h2>Quel est votre forme juridique ?</h2>
    <div className="select_container">
      <Link to='#' >
        <button onClick={()=>setIsIndividual(true)} className='select'>Auto-Entreprise / Entreprise individuelle</button>
      </Link>
      <Link to='#' >
        <button onClick={()=>setIsSARL(true)} className='select'>EURL / SARL</button>
      </Link>
      <Link to='#' >
        <button onClick={()=>setIsSAS(true)} className='select'>SAS / SASU</button>
      </Link>
    </div>
  </div>
  )
}
export default Status
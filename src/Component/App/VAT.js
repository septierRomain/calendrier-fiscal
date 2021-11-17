import React from 'react';
import { Link } from 'react-router-dom'

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
      <Link to='#' ><button onClick={()=>setNoVAT(true)} className='select'>Franchise de base</button></Link>
      <Link to='#' ><button onClick={()=>setIsMonthly(true)} className='select'>Mensuel</button></Link>
      <Link to='#' ><button onClick={()=>setIsTrimester(true)} className='select'>Trimestriel</button></Link>
      <Link to='#' ><button onClick={()=>setIsAnnual(true)} className='select'>Simplfiée</button></Link>
    </div>
  </div>
  )
}
export default VAT
import React from 'react';

import { useContext } from 'react';
import TaxContext from '../../Context/TaxContext'

function TaxSystem() {

  const toggleTAX = (e) => {
    const id = e.target.name
      setTAX({[id]: true})
    console.log(id)
  }

  const {TAX,setTAX} = useContext(TaxContext)
  
  return (
    <div>
      <h2>Etes vous soumis à l'IR ou à l'IS ?</h2>
      <div className='select_container' >
          <input 
            type='button'
            name='isIR'
            value='Impot sur le revenu'
            onClick={(e)=>toggleTAX(e)} 
            className={TAX.isIR ? 'select focus' : 'select'} 
          />
          <input
            type='button'
            name='isIS'
            value='Impot sur les sociétés'
            onClick={(e)=>toggleTAX(e)}
            className={TAX.isIS ? 'select focus' : 'select'}
          />
      </div>
    </div>
  )
}
export default TaxSystem
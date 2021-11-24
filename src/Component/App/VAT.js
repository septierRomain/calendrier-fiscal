import React, { useContext } from 'react';

import VATContext from '../../Context/VATcontext';

function VAT(props) {

  const {VAT, setVAT} = useContext(VATContext)

  const toggleVAT = (e) => {
    const id = e.target.name
      setVAT({[id]: true})
    console.log(id)
  }

  return (
    <div>
    <h2>Quel est votre régime de TVA ?</h2>
    <div className="select_container">

        <button
          onClick={(e)=>toggleVAT(e)}
          name='noVAT'
          className={VAT.noVAT ? 'select focus' : 'select'}
        >
          Franchise de base
        </button>
        <button
          name='isMonthly'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isMonthly ? 'select focus' : 'select'}
        >
          Mensuel
        </button>
        <button
          name='isTrimester'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isTrimester ? 'select focus' : 'select'}
        >
            Trimestriel
        </button>
        <button
          name='isAnnual'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isAnnual ? 'select focus' : 'select'}
        >
          Simplfiée
        </button>
    </div>
  </div>
  )
}
export default VAT
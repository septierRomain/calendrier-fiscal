import React, { useContext } from 'react';

import VATContext from '../../Context/VATcontext';

function Vat(props) {

  const {VAT, setVAT} = useContext(VATContext)

  const toggleVAT = (e) => {
    const id = e.target.name
    setVAT({[id]: true})
    props.changeAnswer(true)
  }

  return (
    <div>
    <h2>Quel est votre régime de TVA ?</h2>
    <div className="select_container">

        <button
          onClick={(e)=>toggleVAT(e)}
          name='noVAT'
          className={VAT.noVAT ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          Franchise de base
        </button>
        <button
          name='isMonthly'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isMonthly ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          Mensuel
        </button>
        <button
          name='isTrimester'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isTrimester ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
            Trimestriel
        </button>
        <button
          name='isAnnual'
          onClick={(e)=>toggleVAT(e)}
          className={VAT.isAnnual ? 'select focus' : 'select shadow'}
          style={{margin: '0'}}
        >
          Simplfiée
        </button>
    </div>
  </div>
  )
}
export default Vat
import React from 'react';

import {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';

function LegalStatus(props) {
  
  const {Status, setStatus} = useContext(StatusContext)

  const toggleStatus = (e) => {
    const id = e.target.name
    setStatus({[id]: true})
    props.changeAnswer(true)
  }

  return (
    <div>
    <h2>Quel est votre forme juridique ?</h2>

    <div className="select_container">
      <button
        name='isIndividual'
        type='button'
        onClick={(e)=>toggleStatus(e)}
        className={Status.isIndividual ? 'select focus' : 'select shadow'}
        >
          Auto-Entreprise <br /> Entreprise&nbsp;individuelle
        </button>
      <button
        name='isSARL'
        type='button'
        onClick={(e)=>toggleStatus(e)}
        className={Status.isSARL ? 'select focus' : 'select shadow'}
      >
        EURL / SARL
      </button>
      <button
        name='isSAS'
        type='button'
        onClick={(e)=>toggleStatus(e)}
        className={Status.isSAS ? 'select focus' : 'select shadow'}
      >
        SAS / SASU
      </button>
    </div>
    
  </div>
  )
}
export default LegalStatus
import React from 'react';
import useModal from '../Hooks/useModal';
import ModalTS from '../Modal/ModalTS'

function TS() {

  const { isShowing, toggle } = useModal();

  return(
    <div className='section'>
      <div className="section-title">
        <h5>
          Taxe sur les salaires
          <button className="modal-toggle" onClick={toggle} >+ d'info</button>
        </h5>
        <ModalTS isShowing={isShowing} hide={toggle} />
      </div>
      <div className="section-content">
        <p>La taxe sur les salaires est à payer pour le 15 de chaque mois.</p>
      </div>
    </div>
  )
}
export default TS
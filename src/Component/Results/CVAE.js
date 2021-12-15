import React from 'react';
import useModal from '../Hooks/useModal';
import ModalCVAE from '../Modal/CVAE'

function CVAE() {

  const { isShowing, toggle } = useModal();

  return(
    <div className='section'>
      <div className="section-title">
        <h5>
          CVAE
          <button className="modal-toggle" onClick={toggle} >+ d'info</button>
        </h5>
        <ModalCVAE isShowing={isShowing} hide={toggle} />
      </div>
      <div className="section-content">
        <p>La CVAE est à payer pour le 3 Mai.</p>
      </div>
    </div>
  )
}
export default CVAE
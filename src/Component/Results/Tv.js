import React, { useContext } from 'react';
import VATContext from '../../Context/VATcontext';
import useModal from '../Hooks/useModal';
import ModalTV from '../Modal/ModalTV'

function TV() {

  const {VAT} = useContext(VATContext)
  const { isShowing, toggle } = useModal();

  return(
    <div className='section'>
      <div className="section-title">
        <h5>
          Redevance télé
          <button className="modal-toggle" onClick={toggle} >+ d'info</button>
        </h5>
        <ModalTV isShowing={isShowing} hide={toggle} />
      </div>
      <div className="section-content">
        {
          VAT.isAnnual ?
          <p>La contribution doit être déclarée en même temps que la déclaration de TVA, c'est à dire le 03 Mai.</p>
          :
          <p>La contribution doit être déclarée en même temps que la déclaration de TVA le 25 Avril de chaque année.</p>
        }
      </div>
    </div>
  )
}
export default TV
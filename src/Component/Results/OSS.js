import React, { useState } from 'react';

import Arrow from '../../Assets/arrow.svg'
import useModal from '../Hooks/useModal';
import ModalOSS from '../Modal/ModalGuichetUnique';

function OSS() {

  const [oss, setOSS] = useState(false)
  const [ioss, setIOSS] = useState(false)
  const { isShowing, toggle } = useModal();

  return(
    <div className='section'>
      <div className="section-title">
        <h5>
          Guichet unique TVA
          <button className="modal-toggle" onClick={toggle} >+ d'info</button>
        </h5>
        <ModalOSS isShowing={isShowing} hide={toggle} />
      </div>
      <div className='section-content' style={{display: 'flex', alignItems: 'center'}}>
        <p>Vous etes inscrit au guichet :</p>
        <button className='outlined' onClick={()=>setOSS(!oss)}>OSS</button>
        <button className='outlined' onClick={()=>setIOSS(!ioss)}>IOSS</button>
      </div>
      <div className='section-content'>
        {oss ?
        <div className='section-content-sub'>
          <ul>
            <img
              src={Arrow}
              alt="Fleche verte"
              style={{transform: 'rotate(180deg)'}}
            />
          OSS</ul>
          <p>Chaque trimestre (31 mars, 30 Juin, 30 Septembre et 31 Décembre)</p>
        </div> 
        :''
        }
        {ioss ?
        <div className='section-content-sub'>
          <ul>
            <img
              src={Arrow}
              alt="Fleche verte"
              style={{transform: 'rotate(180deg)'}}
            />
          IOSS</ul>
          <p>Le dernier jour de chaque mois</p>
        </div>
        : ''
        }
      </div>
    </div>
  )
}
export default OSS
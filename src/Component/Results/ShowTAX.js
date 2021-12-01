import React, {useContext} from 'react';

import TaxContext from '../../Context/TaxContext';
import IS from './DateIS';

import Arrow from '../../Assets/arrow.svg'

function ShowTAX() {

  const {TAX} = useContext(TaxContext)

  return(
    <div>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vos date d'imposition :</ul>
      {TAX.isIR ?
      <p>Déclaration d'impot sur le revenu fin mai ou début juin selon votre région</p>
      : <IS />
      }
    </div>
  )
}
export default ShowTAX
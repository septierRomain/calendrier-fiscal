import React, {useContext} from 'react';

import TaxContext from '../../Context/TaxContext';
import IS from './DateIS';

function ShowTAX() {

  const {TAX} = useContext(TaxContext)

  return(
    <div>
      <p>Vos date d'imposition :</p>
      {TAX.isIR ?
      <p>Déclaration d'impot sur le revenu fin mai ou début juin selon votre région</p>
      : <IS />
      }
    </div>
  )
}
export default ShowTAX
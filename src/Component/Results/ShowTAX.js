import React, {useContext} from 'react';

import TaxContext from '../../Context/TaxContext';
import IS from './DateIS';

function ShowTAX() {

  const {TAX} = useContext(TaxContext)

  return(
    <div className='section'>
      {TAX ?
        <>
          <div className='section-title'>
            {
              TAX.isIR ?
              <h5>Impot sur le revenu</h5> :
              <h5>Impot société</h5>
            }
            </div>
          {TAX.isIR ?
          <div className="section-content">
            <p>Déclaration d'impot sur le revenu fin mai ou début juin selon votre région</p>
          </div>
          : <IS />
          }
        </>
      : ''
      }
    </div>
  )
}
export default ShowTAX
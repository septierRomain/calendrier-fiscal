import React, {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';

import Check from '../../Assets/check.svg'

function Breadcrumbs() {
  const {Status} = useContext(StatusContext)
  const {VAT} = useContext(VATContext)
  const {TAX} = useContext(TaxContext)
  
  return (
    <div className='breadcrumbs'>
          <p>Vous etes :</p>
          {
            Status.isSAS ? <p><img src={Check} alt="fleche grise"/>une SAS</p> : 
            Status.isSARL ? <p><img src={Check} alt="fleche grise"/>une SARL/EURL</p> :
            Status.isIndividual ? <p><img src={Check} alt="fleche grise"/>une entreprise individuelle ou une auto-entreprise</p>:
            ''
          }
          {
            VAT.isAnnual ? <p><img src={Check} alt="fleche grise"/>au régime de tva simplifié de TVA</p> :
            VAT.isMonthly ? <p><img src={Check} alt="fleche grise"/>au régime mensuel de TVA</p> :
            VAT.isTrimester ? <p><img src={Check} alt="fleche grise"/>au régime trimestrielle de TVA</p> :
            VAT.noVAT ? <p><img src={Check} alt="fleche grise"/>en franchise de base de TVA</p> :
            ''
          }
          {
            TAX.isIStrue ? <p><img src={Check} alt="fleche grise"/>à l'impot sur les revenus</p> :
            <p><img src={Check} alt="fleche grise"/>à l'impot sur les sociétés</p>
          }
        </div>
  )
}
export default Breadcrumbs
import React, {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';
import DateContext from '../../Context/DateContext';

import Check from '../../Assets/check.svg'

function Breadcrumbs() {
  const {Status} = useContext(StatusContext)
  const {VAT} = useContext(VATContext)
  const {TAX} = useContext(TaxContext)
  const {date} = useContext(DateContext)
  
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
          {
            date.is3103 ? <p><img src={Check} alt="fleche grise"/>vous cloturez au 31 mars</p> :
            date.is3006 ? <p><img src={Check} alt="fleche grise"/>vous cloturez au 30 Juin</p> :
            date.is3009 ? <p><img src={Check} alt="fleche grise"/>vous cloturez au 30 Septembre</p> :
            date.is3112 ? <p><img src={Check} alt="fleche grise"/>vous cloturez au 31 Décembre</p> : ''
          }
        </div>
  )
}
export default Breadcrumbs
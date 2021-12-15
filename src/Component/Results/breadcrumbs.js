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
          {
            Status.isSAS ? <p><img src={Check} alt="fleche grise"/>Vous etes une SAS</p> : 
            Status.isSARL ? <p><img src={Check} alt="fleche grise"/>Vous etes une SARL/EURL</p> :
            Status.isIndividual ? <p><img src={Check} alt="fleche grise"/>Vous etes une entreprise individuelle ou une auto-entreprise</p>:
            ''
          }
          {
            VAT.isAnnual ? <p><img src={Check} alt="fleche grise"/>Au régime de tva simplifié de TVA</p> :
            VAT.isMonthly ? <p><img src={Check} alt="fleche grise"/>Au régime mensuel de TVA</p> :
            VAT.isTrimester ? <p><img src={Check} alt="fleche grise"/>Au régime trimestrielle de TVA</p> :
            VAT.noVAT ? <p><img src={Check} alt="fleche grise"/>En franchise de base de TVA</p> :
            ''
          }
          {
            TAX.isIStrue ? <p><img src={Check} alt="fleche grise"/>A l'impot sur les revenus</p> :
            <p><img src={Check} alt="fleche grise"/>A l'impot sur les sociétés</p>
          }
          {
            date.is3101 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 31 Janvier</p> :
            date.is2802 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 28 Février</p> :
            date.is3103 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 31 Mars</p> :
            date.is3004 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Avril</p> :
            date.is3105 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 31 Mai</p> :
            date.is3006 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Juin</p> :
            date.is3107 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Juillet</p> :
            date.is3108 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Aout</p> :
            date.is3009 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Septembre</p> :
            date.is3110 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 31 octobre</p> :
            date.is3011 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 30 Novembre</p> :
            date.is3112 ? <p><img src={Check} alt="fleche grise"/>Vous cloturez au 31 Décembre</p> : ''
          }
        </div>
  )
}
export default Breadcrumbs
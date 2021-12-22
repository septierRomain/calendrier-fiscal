import React, {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import VATContext from '../../Context/VATcontext';
import DateContext from '../../Context/DateContext';

function ShowVAT() {

  const {date} = useContext(DateContext)
  const {VAT} = useContext(VATContext)
  const {Status} = useContext(StatusContext)

  const ShowVATValue = () => {
    if(VAT.isAnnual) {
      if(date.is3103)
        {return(<p>TVA à payer au 30 Juin.</p>)}
      else if(date.is3006)
        {return(<p>TVA à payer au 30 Septembre.</p>)}
      else if(date.is3009)
        {return(<p>TVA à payer au 31 Décembre.</p>)}
      else if(date.is3112)
        {return(<p>TVA à payer au 30 Avril.</p>)}
    } else if(VAT.isTrimester){
      if(Status.isSAS)
        {return(<p>TVA le 24 Avril, 24 Juillet, 24 Octobre et 24 Janvier.</p>)}
      else if(Status.isSARL)
        {return(<p>TVA le 19 Avril, 19 Juillet, 19 Octobre et, 19 Janvier.</p>)}
      else if(Status.isIndividual)
        {return(<p>TVA le 17 Avril, 17 Juillet, 17 Octobre et, 17 Janvier.</p>)}
    } else if(VAT.isMonthly){
      if(Status.isSAS)
        {return(<p>TVA le 24 de chaque mois.</p>)}
      else if(Status.isSARL)
        {return(<p>TVA le 19 de chaque mois.</p>)}
      else if(Status.isIndividual)
        {return(<p>TVA le 17 de chaque mois.</p>)}
    } else if(VAT.noVAT){
      return(<p>Pas de déclaration de tva.</p>)
    } 
    else {return ('')}
  }

  return(
    <div className='section'>
      <section>
        <div className='section-title'>
          <h5>TVA</h5>
        </div>
        <div className='section-content' >
          {VAT ?
          <ShowVATValue />
          : ''
          }
        </div>
      </section>
    </div>
  )
}
export default ShowVAT
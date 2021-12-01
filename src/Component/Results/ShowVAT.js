import React, {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import VATContext from '../../Context/VATcontext';

import Arrow from '../../Assets/arrow.svg'

function ShowVAT() {

  const ShowVAT = () => {
    if(VAT.isAnnual) {
      return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 5 Mai N+1</ul>)
    } else if(VAT.isTrimester){
      if(Status.isSAS)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 24 Avril/Juillet/Octobre/Janvier</ul>)}
      else if(Status.isSARL)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 19 Avril/Juillet/Octobre/Janvier</ul>)}
      else if(Status.isIndividual)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 17 Avril/Juillet/Octobre/Janvier</ul>)}
    } else if(VAT.isMonthly){
      if(Status.isSAS)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 24 de chaque mois</ul>)}
      else if(Status.isSARL)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 19 de chaque mois</ul>)}
      else if(Status.isIndividual)
        {return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />TVA le 17 de chaque mois</ul>)}
    } else if(VAT.noVAT){
      return(<ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Pas de tva</ul>)
    } 
  }

  const {Status} = useContext(StatusContext)
  const {VAT} = useContext(VATContext)

  return(
    <div>
      <p>Vos date de tva :</p>
      <ShowVAT />
    </div>
  )
}
export default ShowVAT
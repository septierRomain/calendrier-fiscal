import React, {useContext} from 'react';

import StatusContext from '../../Context/StatusContext';
import VATContext from '../../Context/VATcontext';

import Arrow from '../../Assets/arrow.svg'

function ShowVAT() {

  const ShowVAT = () => {
    if(VAT.isAnnual) {
      return(<p>TVA le 5 Mai N+1</p>)
    } else if(VAT.isTrimester){
      if(Status.isSAS)
        {return(<p>TVA le 24 Avril/Juillet/Octobre/Janvier</p>)}
      else if(Status.isSARL)
        {return(<p>TVA le 19 Avril/Juillet/Octobre/Janvier</p>)}
      else if(Status.isIndividual)
        {return(<p>TVA le 17 Avril/Juillet/Octobre/Janvier</p>)}
    } else if(VAT.isMonthly){
      if(Status.isSAS)
        {return(<p>TVA le 24 de chaque mois</p>)}
      else if(Status.isSARL)
        {return(<p>TVA le 19 de chaque mois</p>)}
      else if(Status.isIndividual)
        {return(<p>TVA le 17 de chaque mois</p>)}
    } else if(VAT.noVAT){
      return(<p>Pas de déclaration de tva</p>)
    } 
  }

  const {Status} = useContext(StatusContext)
  const {VAT} = useContext(VATContext)

  return(
    <div className='aqua'>
      <ul ><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vos date de tva :</ul>
      <ShowVAT />
    </div>
  )
}
export default ShowVAT
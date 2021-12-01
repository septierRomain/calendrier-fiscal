import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';
import Banner from '../App/Banner';
import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'


function Results() {

  let history = useNavigate()

  const {Status} = useContext(StatusContext)
  const {VAT} = useContext(VATContext)
  const {TAX} = useContext(TaxContext)
  
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
      return(<p>Pas de tva</p>)
    } 
  }

  const ShowTAX = () => {
    if(TAX.isIR) {
      return(<p>Impot sur le revenu</p>)
    } else if(TAX.isIS) {return(<p>Impot sur les sociétés</p>)}
  }

  const back = () => {
    history(-1)
  }

  return (
    <div className='wrap'>
      <Banner />
      <div>
        <button onClick={() =>back()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
        <div className='breadcrumbs'>
          <p>Vous etes :</p>
          {
            Status.isSAS ? <p><img src={Check} alt="fleche grise"/>une SAS</p> : 
            Status.isSARL ? <p><img src={Check} alt="fleche grise"/>une SARL/EURL</p> :
            Status.isIndividual ? <p><img src={Check} alt="fleche grise"/>une entreprise individuelle ou une auto-entreprise</p>:
            ''
          }
          {
            VAT.isAnnual ? <p><img src={Check} alt="fleche grise"/>au régime de tva simplifié</p> :
            VAT.isMonthly ? <p><img src={Check} alt="fleche grise"/>au régime mensuel</p> :
            VAT.isTrimester ? <p><img src={Check} alt="fleche grise"/>au régime trimestrielle</p> :
            ''
          }
          {
            TAX.isIStrue ? <p><img src={Check} alt="fleche grise"/>à l'impot sur les revenus</p> :
            <p><img src={Check} alt="fleche grise"/>à l'impot sur les sociétés</p>
          }
        </div>
        <h2>votre calendrier fiscal</h2>
        <div>
          <ShowVAT />
          <ShowTAX />
        </div>
      </div>
    </div>
  )
}

export default Results
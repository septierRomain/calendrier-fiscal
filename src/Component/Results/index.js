import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';

import Banner from '../App/Banner';
import Breadcrumbs from './breadcrumbs';

import GreyArrow from '../../Assets/grey arrow.svg';


function Results() {
  
  let history = useNavigate()

  const {Status, setStatus} = useContext(StatusContext)
  const {VAT, setVAT} = useContext(VATContext)
  const {TAX, setTAX} = useContext(TaxContext)
  
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
    setVAT({})
    setStatus({})
    setTAX({})
  }

  return (
    <div className='wrap'>
      <Banner />
      <div>
        <button onClick={() =>back()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
        <Breadcrumbs />
        <h2>Votre calendrier fiscal</h2>
        <div>
          {/* <ShowVAT /> */}
          {/* <ShowTAX /> */}
        </div>
      </div>
    </div>
  )
}

export default Results
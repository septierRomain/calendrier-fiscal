import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';

import Banner from '../App/Banner';
import ShowVAT from './ShowVAT'

import GreyArrow from '../../Assets/grey arrow.svg';
import ShowTAX from './ShowTAX';
import CFE from './CFE';
import OSS from './OSS';
import Breadcrumbs from './Breadcrumbs.js';


function Results() {
  
  let history = useNavigate()

  const {setStatus} = useContext(StatusContext)
  const {setVAT} = useContext(VATContext)
  const {setTAX} = useContext(TaxContext)

  const back = () => {
    history(-1)
    setTimeout(()=>{
      setVAT({})
      setStatus({})
      setTAX({})
    }, 50)
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
          <ShowVAT />
          <ShowTAX />
          <CFE />
          <OSS />
        </div>
      </div>
    </div>
  )
}

export default Results
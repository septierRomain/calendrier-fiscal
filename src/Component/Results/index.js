import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import StatusContext from '../../Context/StatusContext';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';
import DateContext from '../../Context/DateContext';

import Banner from '../App/Banner';
import ShowVAT from './ShowVAT'

import GreyArrow from '../../Assets/grey arrow.svg';
import ShowTAX from './ShowTAX';
import CFE from './CFE';
import OSS from './OSS';
import Breadcrumbs from './breadcrumbs'
import CVAE from './CVAE'
import TV from './Tv'
import TVS from './TVS'
import TS from './TS';


function Results() {
  
  let history = useNavigate()

  const {setStatus} = useContext(StatusContext)
  const {setVAT} = useContext(VATContext)
  const {setTAX} = useContext(TaxContext)
  const {setDate} = useContext(DateContext)

  const [more, setMore] = useState(false)

  const back = () => {
    history(-1)
    setTimeout(()=>{
      setVAT({})
      setStatus({})
      setTAX({})
      setDate({})
    }, 50)
  }

  useEffect(() => {
    setVAT(JSON.parse(window.localStorage.getItem('VAT')))
    setTAX(JSON.parse(window.localStorage.getItem('TAX')))
    setDate(JSON.parse(window.localStorage.getItem('date')))
    setStatus(JSON.parse(window.localStorage.getItem('Status')))
  }, [])

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
        <div className='wrap-result'>
          <ShowVAT />
          <ShowTAX />
          <CFE />
          <OSS />
          <div id='more'>
            <button onClick={()=>setMore(!more)} className={more ? 'hide' : 'undo'}>Plus</button>
            {
            more ?
            <div className="wrap-result">
              <CVAE />
              <TV />
              <TVS />
              <TS />
            </div>
            : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results

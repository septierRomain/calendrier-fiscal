import React from 'react';
import { Link } from 'react-router-dom'

import {useContext} from 'react';
import Banner from './Banner';

import VATContext from '../../Context/VATcontext';

function Home() {

  const {
    setNoVAT,
    setIsAnnual,
    setIsMonthly,
    setIsTrimester
  } = useContext(VATContext)

  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre calendrier fiscal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat fuga sed minima sequi repudiandae quos, ipsa commodi alias aperiam necessitatibus est molestias quisquam, ratione, beatae cumque explicabo officiis fugit!</p>
        
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Quel est votre régime de TVA ?</h2>
        <div className="select_container">
          <Link to='#' ><button onClick={()=>setNoVAT(true)} className='select'>Franchise de base</button></Link>
          <Link to='#' ><button onClick={()=>setIsMonthly(true)} className='select'>Mensuel</button></Link>
          <Link to='#' ><button onClick={()=>setIsTrimester(true)} className='select'>Trimestriel</button></Link>
          <Link to='#' ><button onClick={()=>setIsAnnual(true)} className='select'>Simplfiée</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home
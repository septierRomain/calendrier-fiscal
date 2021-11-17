import React, {useContext} from 'react';
import VATContext from '../../Context/VATcontext';
import Banner from './Banner';
import Status from './LegalStatus';
import Questionnary from './Questionnary';
import VAT from './VAT';

function Home() {

  const {noVAT, isAnnual, isMonthly, isTrimester} = useContext(VATContext)

  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre calendrier fiscal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat fuga sed minima sequi repudiandae quos, ipsa commodi alias aperiam necessitatibus est molestias quisquam, ratione, beatae cumque explicabo officiis fugit!</p>
        
        <p>C’est parti !</p>
      </div>

      <Questionnary />

    </div>
  )
}

export default Home
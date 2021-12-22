import React from 'react';
import Banner from './Banner';
import Questionnary from './Questionnary';

function Home() {

  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre calendrier fiscal</h1>
        <p>Découvrez toutes les dates clés de l'année en matiére d'impôt: TVA, impôt société, impôt sur le revenu, CFE, OSS, IOSS, taxe sur les véhicules des sociétés...</p>
        <p>Vous ne raterez plus aucune échéance et les visualiserez en un coup d'oeil.</p>
        
        <p>C’est parti !</p>
      </div>

      <Questionnary />

    </div>
  )
}

export default Home
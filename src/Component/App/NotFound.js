import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBackward} from '@fortawesome/free-solid-svg-icons'

function NotFound() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />
      <div id='notFound'>
        <p>Oups, il n'y a rien à cette adresse !</p>
        <Link className='backHome' to='/'><FontAwesomeIcon icon={faBackward} />Retour chez nous !</Link>
      </div>
    </div>
  )
}
export default NotFound
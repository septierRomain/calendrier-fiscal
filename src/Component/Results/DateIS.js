import React, { useContext } from 'react';

import DateContext from '../../Context/DateContext';

function IS() {

  const {date} = useContext(DateContext)

  return(
    <div className="section-content">
      {date ?
      <>
        <p>Acompte au 15 Juillet et au 15 Décembre</p>
        {
        date.is3101 ? <p>Solde d'impot société au 15 Mai</p> :
        date.is2802 ? <p>Solde d'impot société au 15 Juin</p> :
        date.is3103 ? <p>Solde d'impot société au 15 Juillet</p> :
        date.is3004 ? <p>Solde d'impot société au 15 Aout</p> :
        date.is3105 ? <p>Solde d'impot société au 15 Septembre</p> :
        date.is3006 ? <p>Solde d'impot société au 15 Octobre</p> :
        date.is3107 ? <p>Solde d'impot société au 15 Novembre</p> :
        date.is3108 ? <p>Solde d'impot société au 15 Décembre</p> :
        date.is3009 ? <p>Solde d'impot société au 15 Janvier</p> :
        date.is3110 ? <p>Solde d'impot société au 15 Février</p> :
        date.is3011 ? <p>Solde d'impot société au 15 Mars</p> :
        date.is3112 ? <p>Solde d'impot société au 15 Avril</p>
        : ''
        }
      </>
      :
      ''
      }
    </div>
  )
}
export default IS
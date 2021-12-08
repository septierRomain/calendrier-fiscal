import React, { useContext } from 'react';

import DateContext from '../../Context/DateContext';

function IS() {

  const {date} = useContext(DateContext)

  return(
    <div>
      <p>Acompte au 15 Juillet et au 15 Décembre</p>
      {
      date.is3103 ? <p>Solde d'impot société au 15 Juillet</p> :
      date.is3006 ? <p>Solde d'impot société au 15 Octobre</p> :
      date.is3009 ? <p>Solde d'impot société au 15 Janvier</p> :
      date.is3112 ? <p>Solde d'impot société au 15 Avril</p>
      : ''
      }  
    </div>
  )
}
export default IS
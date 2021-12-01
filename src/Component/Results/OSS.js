import React, { useState } from 'react';

import Arrow from '../../Assets/arrow.svg'

function OSS() {

  const [oss, setOSS] = useState(false)
  const [ioss, setIOSS] = useState(false)

  return(
    <div>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Guichet unique :</ul>
      <div style={{display: 'flex'}}>
        <p>Etes vous redevable de :</p>
        <button onClick={()=>setOSS(!oss)}>OSS</button>
        <button onClick={()=>setIOSS(!ioss)}>IOSS</button>
      </div>
      <div>
        {oss ?
          <div>
            <ul>OSS</ul>
            <p>31/03 - 30/06 - 30/09 - 31/12</p>
          </div> 
        :''
        }
        {ioss ?
        <div>
          <ul>IOSS</ul>
          <p>le dernier jour de chaque mois</p>
        </div>
        : ''
        }
      </div>
    </div>
  )
}
export default OSS
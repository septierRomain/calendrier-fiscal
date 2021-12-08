import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import TaxSystem from './TaxSystem';
import LegalStatus from './LegalStatus';
import EndingDate from './EndingDate';
import Vat from './VAT';

function Questionnary() {

  const [vatAnswer, setVatAnswer] = useState(false)
  const [statusAnswer, setStatusAnswer] = useState(false)
  const [taxAnswer, setTaxAnswer] = useState(false)
  const [dateAnswer, setDateAnswer] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='questionnary'>
      <form onSubmit={handleSubmit}>
        <Vat changeAnswer={setVatAnswer} />
        <LegalStatus changeAnswer={setStatusAnswer}/>
        <TaxSystem changeAnswer={setTaxAnswer}/>
        <EndingDate changeAnswer={setDateAnswer}/>
      </form>
        <div id='send'>
          {taxAnswer&&vatAnswer&&statusAnswer&&dateAnswer ?
          <Link to='/calendrier' id='undo'>Valider</Link> : 
          ''
          }
        </div>
    </div>
  )
}
export default Questionnary
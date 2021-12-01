import React, {useState} from 'react';
import TaxSystem from './TaxSystem';
import LegalStatus from './LegalStatus';
import Vat from './VAT';
import { Link } from 'react-router-dom';

function Questionnary() {

  const [vatAnswer, setVatAnswer] = useState(false)
  const [statusAnswer, setStatusAnswer] = useState(false)
  const [taxAnswer, setTaxAnswer] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Vat changeAnswer={setVatAnswer} />
        <LegalStatus changeAnswer={setStatusAnswer}/>
        <TaxSystem changeAnswer={setTaxAnswer}/>
      </form>
        <div id='send'>
          {taxAnswer&&vatAnswer&&statusAnswer ?
          <Link to='/calendrier' id='undo'>Valider</Link> : 
          ''
          }
          
        </div>
        <div>
        </div>
    </div>
  )
}
export default Questionnary
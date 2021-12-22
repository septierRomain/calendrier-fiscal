import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import TaxSystem from './TaxSystem';
import LegalStatus from './LegalStatus';
import EndingDate from './EndingDate';
import Vat from './VAT';
import VATContext from '../../Context/VATcontext';
import TaxContext from '../../Context/TaxContext';
import DateContext from '../../Context/DateContext';
import StatusContext from '../../Context/StatusContext';

function Questionnary() {

  const [vatAnswer, setVatAnswer] = useState(false)
  const [statusAnswer, setStatusAnswer] = useState(false)
  const [taxAnswer, setTaxAnswer] = useState(false)
  const [dateAnswer, setDateAnswer] = useState(false)

  const {VAT} = useContext(VATContext)
  const {TAX} = useContext(TaxContext)
  const {date} = useContext(DateContext)
  const {Status} = useContext(StatusContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log(VAT)
    localStorage.setItem('VAT', JSON.stringify(VAT))
  }, [VAT])
  useEffect(() => {
    console.log(TAX)
    localStorage.setItem('TAX', JSON.stringify(TAX))
  }, [TAX])
  useEffect(() => {
    console.log(date)
    localStorage.setItem('date', JSON.stringify(date))
  }, [date])
  useEffect(() => {
    console.log(Status)
    localStorage.setItem('Status', JSON.stringify(Status))
  }, [Status])

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
          <Link to='/calendrier' className='undo'>Valider</Link> : 
          ''
          }
        </div>
    </div>
  )
}
export default Questionnary
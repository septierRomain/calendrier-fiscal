import React, { useContext} from 'react';
import TaxSystem from './TaxSystem';
import Status from './LegalStatus';
import VAT from './VAT';
import { Link } from 'react-router-dom';
import TaxContext from '../../Context/TaxContext';
import VATContext from '../../Context/VATcontext';
import StatusContext from '../../Context/StatusContext';

function Questionnary() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const {TAX} = useContext(TaxContext)
  // const {VAT} = useContext(VATContext)
  // const {Status} = useContext(StatusContext)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <VAT/>
        <Status/>
        <TaxSystem/>
      </form>
        <div id='send'>
            <Link to='/calendrier' id='undo'>Valider</Link>
        </div>
        <div>
          {TAX ? '' : <p>choisi</p>}
        </div>
    </div>
  )
}
export default Questionnary
import React from 'react';
import { useContext } from 'react';
import VATContext from '../../Context/VATcontext';
import StatusContext from '../../Context/StatusContext';
import Status from './LegalStatus';
import VAT from './VAT';
import TaxSystem from './TaxSystem';

function Questionnary() {

  const {noVAT, isAnnual, isMonthly, isTrimester} = useContext(VATContext)
  const {isIndividual, isSARL, isSAS} = useContext(StatusContext)

  return (
    <div>
      {noVAT||isAnnual||isMonthly||isTrimester ? 
      <Status /> : <VAT />}
    </div>
  )
}
export default Questionnary
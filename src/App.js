import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import {VATContext} from './Context/VATcontext'
import {StatusContext} from './Context/StatusContext'
import {TaxContext} from './Context/TaxContext'
import {DateContext} from './Context/DateContext'

import Home from './Component/App/Home'
import Results from './Component/Results/index';
import NotFound from './Component/App/NotFound';

function App() {

  const [ VAT, setVAT ] = useState({
    noVAT: false,
    isTrimester: false,
    isAnnual: false,
    isMonthly: false
  })
  const [Status, setStatus] = useState({
    isSARL: false,
    isSAS: false,
    isIndividual: false
  })

  const [ TAX, setTAX ] = useState({
    isIR: false,
    isIS: false
  })
  const [ date, setDate ] = useState({
    is3103: false,
    is3006: false,
    is3009: false,
    is3112: false
  })
  
  const VATValue = {VAT,setVAT}
  const StatusValue = {Status, setStatus}
  const TaxValue = {TAX, setTAX}
  const DateValue = {date, setDate}

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <VATContext.Provider value={VATValue}>
          <StatusContext.Provider value={StatusValue}>
            <TaxContext.Provider value={TaxValue} >
              <DateContext.Provider value={DateValue} >
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/calendrier' element={<Results />} />
                  {/* Fallback - gestion de 404 */}
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </DateContext.Provider>
            </TaxContext.Provider>
          </StatusContext.Provider>
        </VATContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import {VATContext} from './Context/VATcontext'
import {StatusContext} from './Context/StatusContext'
import {TaxContext} from './Context/TaxContext'

import Home from './Component/App/Home'
import Results from './Component/Results/index';

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
  
  const VATValue = {VAT,setVAT}
  const StatusValue = {Status, setStatus}
  const TaxValue = {TAX, setTAX}

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <VATContext.Provider value={VATValue}>
          <StatusContext.Provider value={StatusValue}>
            <TaxContext.Provider value={TaxValue} >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/calendrier' element={<Results />} />
              </Routes>
            </TaxContext.Provider>
          </StatusContext.Provider>
        </VATContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

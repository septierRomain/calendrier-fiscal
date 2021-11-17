import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import {VATContext} from './Context/VATcontext'
import {StatusContext} from './Context/StatusContext'

import Home from './Component/App/Home'
import Status from './Component/App/LegalStatus';

function App() {

  const [ noVAT, setNoVAT ] = useState(false)
  const [ isAnnual, setIsAnnual ] = useState(false)
  const [ isMonthly, setIsMonthly ] = useState(false)
  const [ isTrimester, setIsTrimester ] = useState(false)
  const [ isIndividual, setIsIndividual ] = useState(false)
  const [ isSARL, setIsSARL ] = useState(false)
  const [ isSAS, setIsSAS ] = useState(false)
  
  const VATValue = {
    noVAT,
    isAnnual,
    isMonthly,
    isTrimester,
    setNoVAT,
    setIsAnnual,
    setIsMonthly,
    setIsTrimester
  }
  const StatusValue = {
    isIndividual,
    isSARL,
    isSAS,
    setIsIndividual,
    setIsSARL,
    setIsSAS
  }

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <VATContext.Provider value={VATValue}>
          <StatusContext.Provider value={StatusValue}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </StatusContext.Provider>
        </VATContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

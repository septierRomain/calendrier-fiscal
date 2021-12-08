import React from 'react';
import { useContext } from 'react';
import TaxContext from '../../Context/TaxContext'
import StatusContext from '../../Context/StatusContext';

function TaxSystem(props) {

  const toggleTAX = (e) => {
    const id = e.target.name
    setTAX({[id]: true})
    props.changeAnswer(true)
  }

  const {TAX,setTAX} = useContext(TaxContext)
  const {Status} = useContext(StatusContext)
  
  return (
    <div>
      <h2>Etes vous soumis à l'IR ou à l'IS ?</h2>
        {
          Status.isIndividual ?
          <div className='select_container' >
            <input 
            type='button'
            name='isIR'
            value='Impot sur le revenu'
            onClick={(e)=>toggleTAX(e)} 
            className={TAX.isIR ? 'select focus' : 'select shadow'} 
            />
          </div>
        :
        <div className='select_container' >
          <input 
            type='button'
            name='isIR'
            value='Impot sur le revenu'
            onClick={(e)=>toggleTAX(e)} 
            className={TAX.isIR ? 'select focus' : 'select shadow'} 
          />
          <input
            type='button'
            name='isIS'
            value='Impot sur les sociétés'
            onClick={(e)=>toggleTAX(e)}
            className={TAX.isIS ? 'select focus' : 'select shadow'}
          />
        </div>
        }
    </div>
  )
}
export default TaxSystem
import React, {useContext} from 'react';
import DateContext from '../../Context/DateContext'
import TaxContext from '../../Context/TaxContext';

function EndingDate(props) {

  const {date, setDate} = useContext(DateContext)
  const {TAX} = useContext(TaxContext)
  
  const toggleDate = (e) => {
    const id = e.target.name
    setDate({[id]: true})
    props.changeAnswer(true)
  }

  return(
    <div>
      <h2>Quel est votre date de cloture ?</h2>
      
        {
          TAX.isIR ? 
          <div className="select_container">
            <button
              onClick={(e)=>toggleDate(e)}
              name='is3112'
              className={date.is3112 ? 'select focus' : 'select'}
            >
            31 Décembre
            </button>
          </div>
          :
          <div className="select_container">
            <button
              onClick={(e)=>toggleDate(e)}
              name='is3103'
              className={date.is3103 ? 'select focus' : 'select'}
            >
              31 mars
            </button>
            <button
              onClick={(e)=>toggleDate(e)}
              name='is3006'
              className={date.is3006 ? 'select focus' : 'select'}
            >
              30 Juin
            </button>
            <button
              onClick={(e)=>toggleDate(e)}
              name='is3009'
              className={date.is3009 ? 'select focus' : 'select'}
            >
              30 Septembre
            </button>
            <button
              onClick={(e)=>toggleDate(e)}
              name='is3112'
              className={date.is3112 ? 'select focus' : 'select'}
            >
              31 Décembre
            </button>
          </div>
        }
      </div>
  )
}
export default EndingDate
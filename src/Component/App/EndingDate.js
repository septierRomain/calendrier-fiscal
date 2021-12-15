import React, {useContext, useState} from 'react';
import Select from 'react-select'
import DateContext from '../../Context/DateContext'

function EndingDate(props) {

  const {setDate} = useContext(DateContext)

  const [value, setValue] = useState('')
  
  // const toggleDate = (e) => {
  //   const id = e.target.name
  //   setDate({[id]: true})
  //   props.changeAnswer(true)
  // }

  const options = [
    {label: '31 Janvier', value:'is3101'},
    {label: '28 Février', value:'is2802'},
    {label: '31 Mars', value:'is3103'},
    {label: '30 Avril', value:'is3004'},
    {label: '31 Mai', value:'is3105'},
    {label: '30 Juin', value:'is3006'},
    {label: '31 Juillet', value:'is3107'},
    {label: '31 Aout', value:'is3108'},
    {label: '30 Septembre', value:'is3009'},
    {label: '31 Octobre', value:'is3110'},
    {label: '30 Novembre', value:'is3011'},
    {label: '31 Décembre', value:'is3112'}
  ]

  const handleChange = (value) => {
    setValue(value)
    setDate({[value.value]: true})
    props.changeAnswer(true)
  }

  return(
    <div>
      <h2>Quel est votre date de cloture ?</h2>
      
      {/* <div className="select_container">
        <button
          onClick={(e)=>toggleDate(e)}
          name='is3103'
          className={date.is3103 ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          31 mars
        </button>
        <button
          onClick={(e)=>toggleDate(e)}
          name='is3006'
          className={date.is3006 ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          30 Juin
        </button>
        <button
          onClick={(e)=>toggleDate(e)}
          name='is3009'
          className={date.is3009 ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          30 Septembre
        </button>
        <button
          onClick={(e)=>toggleDate(e)}
          name='is3112'
          className={date.is3112 ? 'select focus' : 'select shadow'}
          style={{marginRight: '0'}}
        >
          31 Décembre
        </button>
      </div> */}

      <div id='endingDate'>
            <label htmlFor='endingDate' className='label' >
              <Select 
              name="ending"
              id="endingDate"
              value={value}
              onChange={handleChange}
              options={options}
              placeholder='Choisissez une date'
              />
            </label>
      </div>
    </div>
  )
}
export default EndingDate
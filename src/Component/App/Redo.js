import React from 'react'
import {Link} from 'react-router-dom'

import Undo from '../../Assets/undo.svg'

function Redo() {
  return(
    <div>
      <Link to='/'>
      <button id='undo'>
        <img src={Undo} alt="recommencer" style={{width:'24px'}}/>
        Recommencer
      </button>
      </Link>
    </div>
  )
}

export default Redo
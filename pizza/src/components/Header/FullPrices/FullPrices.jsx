import React from 'react'
import full from './FullPrices.module.css'

import icon from '../../img/icon-basket.svg'
function FullPrices() {
  return (
    <div className={full.container}>
       <div className={full.divider}></div> 
       <span className={full.prices}>$</span>
       <img className={full.icon} src={icon} alt=" icon basket" />
       <span className={full.basket}>  </span>
       




    </div>
  )
}

export default FullPrices
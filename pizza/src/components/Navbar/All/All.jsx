import React from 'react'
import SamplePizza from '../../SamplePizza/SamplePizza'
import all from './All.module.css'
function All() {
  return (
    <div className={all.container}> All
    <h1 className={all.title}> Все пиццы</h1>
     <SamplePizza></SamplePizza>

    </div>
  )
}

export default All
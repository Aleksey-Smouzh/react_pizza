import React from 'react'
import SamplePizza from '../../SamplePizza/SamplePizza'
import all from './All.module.css'
function All(props) {
  return (
    <div className={all.container}> All
    <h1 className={all.title}> Все пиццы</h1>
     <div className={all.wrapper}>
    <div className={all.blok1} ><SamplePizza/></div>
    <div className={all.blok2} ><SamplePizza/></div> 
    <div className={all.blok3} ><SamplePizza/></div>
    <div className={all.blok4} ><SamplePizza/></div>
    <div className={all.blok5} ><SamplePizza/></div>
    <div className={all.blok6} ><SamplePizza/></div>
    <div className={all.blok7} ><SamplePizza/></div>
    <div className={all.blok8} ><SamplePizza/></div>
</div>
    </div>
  )
}

export default All
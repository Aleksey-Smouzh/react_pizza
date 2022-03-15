import React from "react";
import sample from './SamplePizza.module.css';
import image from '.././img/cheeseburger.svg'

function SamplePizza(props) {
  return (

    <div className={sample.container}>
      <img className={sample.image} src={image} alt="Cheeseburger" /> 
      <h2 className={sample.title}>pizza</h2>
      <div className={sample.btn_group}>
      <button className={sample.btn_thin} >тонкое</button>
      <button className={sample.btn_traditional}>традиционное</button>
      <button className={sample.btn_26} >26 см.</button>
      <button className={sample.btn_30} >30 см.</button>
      <button className={sample.btn_40} >40 см.</button>
      <span className={sample.cost}>от 4 $</span>
      <button className={sample.btn_add} >+ Добавить</button>
      </div>
    
    </div>
    
  );
}

export default SamplePizza;

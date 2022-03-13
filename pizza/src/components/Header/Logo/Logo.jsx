import React from 'react'
import logo from './Logo.module.css'
import imgLogo from '../../img/pizza-logo.svg'


function Logo() {
  return (
    <div className={logo.container}>
       <h1 className={logo.title}>REACT PIZZA</h1>
       <span className={logo.slogan}>самая вкусная пицца во вселенной</span>
       <img className={logo.img} src={imgLogo} alt="a piece of pizza" />



    </div>
  )
}

export default Logo
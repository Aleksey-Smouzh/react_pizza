import React from 'react'
import FullPrices from './FullPrices/FullPrices'
import header from './Header.module.css'
import Logo from './Logo/Logo'

function Header() {
  return (
    <div className={header.container}>
    <Logo/>
    <FullPrices/>
    </div>
  )
}

export default Header
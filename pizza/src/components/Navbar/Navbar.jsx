import React from 'react'
import { useLocation } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

 import navbar from './Navbar.module.css'



function Navbar() {
let url = useLocation()
console.log(url)
  return (
    <div className={navbar.container}>
    <nav>
       <button><NavLink to='/all'>Все</NavLink></button>
       <button><NavLink to="/closed">Закрытые</NavLink></button>
       <button><NavLink to="/grill">Гриль</NavLink></button>
       <button><NavLink to='/meat'>Мясные</NavLink></button>
       <button><NavLink to="/spicy">Острая</NavLink></button>
       <button><NavLink to="/vegan">Вегетарианская</NavLink></button>
      
    </nav> 




    </div>
  )
}

export default Navbar
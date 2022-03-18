import React from 'react'
import Meat from '../Navbar/Meat/Meat'
import main from "./MainPage.module.css"
function MainPage(props) {
  
  console.log(props)
  
   let by = props.state.map((te)=> (<div key={te.id}> {te.name} {te.img}</div>))
console.log(props)
  return (
    <div className={main.container}> {by}test
   
    
   
    </div>
    
  )
}

export default MainPage
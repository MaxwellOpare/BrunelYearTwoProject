import React from 'react'

import "../../css/navbar.css"

import { useNavigate } from 'react-router-dom'

function Navbutton({value, onNavbuttonClick}) {
  return (
      <div className="nb-div">
      <img id="ic" className={value.icon} alt=""/>
      <button id="nb" className="nav-button" onClick={onNavbuttonClick}>{value.text}</button>
      </div>
    )
}

function NavBar() {
  const navigate = useNavigate()

  function redirect(path) {
    navigate("/" + path)
  }

  return (
    <div className="nav-bar">
        <div className="logo-holder">
          <span className='logo'></span>
          <h1 className='navbar-title'>ECOBILLING</h1>
        </div>
        <div className="buttons-holder">
          <Navbutton value={{text: "Dashboard", icon: "home-icon"}} onNavbuttonClick={() => redirect("")}/>
          <Navbutton value={{text: "Reports", icon: "report-icon"}} onNavbuttonClick={() => redirect("reports")}/>
          <Navbutton value={{text: "Efficiency Calculator", icon: "calc-icon"}} onNavbuttonClick={() => redirect("calculator")}/>
          <Navbutton value={{text: "Data Visualization", icon: "viz-icon"}} onNavbuttonClick={() => redirect("dataVisualization")}/>
          <Navbutton value={{text: "Energy Score", icon: "energy-icon"}} onNavbuttonClick={() => redirect("energyScore")}/>
          <Navbutton value={{text: "Premium Subscription", icon: "premium-icon"}} onNavbuttonClick={() => redirect("")}/>
          <Navbutton value={{text: "Administrator", icon: "admin-icon"}} onNavbuttonClick={() => redirect("admin")}/>
        </div>
        <div className="nav-bottom">
          <button id="login" className="nav-button" ><Navbutton value={{text: "Sign Up", icon: "signup-icon"}} onNavbuttonClick={() => redirect("signup")} /></button>
          <button id="register" className="nav-button"><Navbutton value={{text: "Sign In", icon: "signin-icon"}} onNavbuttonClick={() => redirect("login")} /></button>
        </div>
    </div>
  )
}

export default NavBar

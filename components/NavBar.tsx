import React from 'react'

const NavBar = () => {
  return(
    <div className="custom-navbar" >
      <div className="nav-logo">
        <img style={{width: '112px', height: '112px'}} className="logo" src='./logo-p1.png' />
      </div>
      <div className="nav-right">
        <div className="nav-item">
          <img className="app-lighting" src='./moon.svg' />
        </div>
        <div className="nav-item">
          <img className="nav-burger" src="./burger.svg" />
        </div>
      </div>
      
    </div>
  )
}
export default NavBar;
import React from 'react'
import { motion } from 'framer-motion';
const NavBar = () => {
  return(
    <div className="custom-navbar" >
      <div className="nav-logo">
        <img style={{width: '99px', height: '99px'}} className="logo" src='./logo-p1.png' />
      </div>
      <div className="nav-right">
        <div className="nav-item">
          <img className="app-lighting" src='./moon.svg' />
        </div>
        <motion.div className="nav-item">
          <img className="nav-burger" src="./burger.svg" />
        </motion.div>
      </div>
      
    </div>
  )
}
export default NavBar;
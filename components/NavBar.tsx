import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import { MenuButton } from './MenuButton';
import Hamburger from './Hamburger';
const NavItem = styled(motion.div)`
  margin: 10px;
  cursor: pointer;
`;
const NavBar = ({lightTheme, lightSwitch}: any) => {
  const [isOpen, setOpen] = React.useState(false);
  const [isActive, setActive] = React.useState(false);;
  
  return(
    <div className="custom-navbar" >
      <NavItem whileHover={{rotate: 30}} whileTap={{scale: 0.95}}>
        <div className="nav-logo">
          <img style={{width: '77px', height: '77px'}} className="logo" src='./logo-p1.png' />
        </div>
      </NavItem>
      <div className="nav-right">
        <NavItem whileTap={{scale: 0.9}}>
          <div className="lightswitch">
              <div className="front">
                <img onClick={lightSwitch} className="app-lighting" src={lightTheme ? './sun.svg' : './moon.svg'} />
              </div>
              <div className="back">
                <img onClick={lightSwitch} className="app-lighting" src={!lightTheme ? './sun.svg' : './moon.svg'} />
              </div>
          </div>
        </NavItem>
        <motion.div whileHover={{scale: 1.05}}>
          <Hamburger lightTheme={lightTheme} />
        </motion.div>
      </div>
      
    </div>
  )
}
export default NavBar;
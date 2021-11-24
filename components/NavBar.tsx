import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import Hamburger from './Hamburger';
import Link from 'next/link'
const NavItem = styled(motion.div)`
  margin-right: 10px;
`;
const NavBar = ({lightTheme, lightSwitch}: any) => {
  return (
    <div className="custom-navbar">
      <NavItem whileHover={{ rotate: 30 }} whileTap={{ scale: 0.95 }}>
        <div className="nav-logo">
          <img
            style={{ width: "77px", height: "77px" }}
            className="logo"
            src="./logo-p1.png"
          />
        </div>
      </NavItem>
      <div className="nav-right">
        <NavItem className="nav-links">
            {['Home', 'Projects', 'About', 'Blog'].map((link, i) => {
              return (
                  <motion.div key={`nav-link${i}`} className='nav-link'>
                    <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                  </motion.div>
                );
            })}
        </NavItem>
        <NavItem  whileTap={{ scale: 0.9 }}>
          <div style={{cursor: 'pointer'}} onClick={lightSwitch} className="lightswitch" >
            <img
              className="app-lighting"
              src={lightTheme ? "./sun.svg" : "./moon.svg"}
            />
          </div>
        </NavItem>
        <motion.div className="hamburger-div" whileHover={{ scale: 1.05 }}>
          <Hamburger lightTheme={lightTheme} />
        </motion.div>
      </div>
    </div>
  );
}
export default NavBar;
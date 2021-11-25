import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import Hamburger from './Hamburger';
import Link from 'next/link'
const openMenu = {translateX: 205, height: 100}
const closeMenu = {translateX: 0, height: 500}
const NavItem = styled(motion.div)`
  margin-right: 10px;
  z-index: 12;
`;
const NavBar = ({lightTheme, lightSwitch, activeClass}: any) => {
  const [active, setActive] = React.useState(activeClass || {home: true, projects: false, blog: false, about: false})
  const [isOpen, setOpen] = React.useState(false)
  const linkArray = [
    {
      link: 'Home',
      active: active.home
    },
    {
      link: 'Projects',
      active: active.projects
    },
    {
      link: 'Blog',
      active: active.blog
    },
    {
      link: 'About',
      active: active.about
    },
]
  return (
    <motion.div variants={container} style={{ zIndex: 10 }} className="custom-navbar">
      <NavItem whileHover={{ rotate: 30 }} whileTap={{ scale: 0.95 }}>
        <div className="nav-logo">
          <img
            style={{ width: "77px", height: "77px" }}
            className="logo"
            src="./logo-p1.png"
          />
        </div>
      </NavItem>
      <motion.div className="nav-right">
        <NavItem className="nav-links">
          {linkArray.map((linkObj, i) => {
            return (
              <motion.div
                whileHover={{ translateY: -8, scale: 1.07 }}
                key={`nav-link${i}`}
                className={`nav-link ${linkObj.active && "active-link"}`}
              >
                <Link href={`/${linkObj.link.toLowerCase()}`}>
                  {linkObj.link}
                </Link>
              </motion.div>
            );
          })}
        </NavItem>
        <motion.div
          whileHover={{ scale: 1.2, translateY: -8 }}
          whileTap={{ scale: 0.9 }}
          className="lightswitch-div"
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={lightSwitch}
            className="lightswitch"
          >
            <img
              className="app-lighting"
              src={lightTheme ? "./sun.svg" : "./moon.svg"}
            />
          </div>
        </motion.div>
        <motion.div className="hamburger-div" whileHover={{ scale: 1.05 }}>
          <Hamburger
            isOpen={isOpen}
            setOpen={setOpen}
            active={active}
            lightTheme={lightTheme}
          />
        </motion.div>
        <motion.div
          animate={!isOpen ? openMenu : closeMenu}
          className={`hamburger-slider${!isOpen ? " inactive" : ""}`}
        >
          {linkArray.map((linkObj, i) => {
            return (
              <motion.div
                whileHover={{ translateY: -8, scale: 1.07 }}
                key={`nav-link${i}`}
                className={`nav-link ${linkObj.active && "active-link"}`}
              >
                <Link href={`/${linkObj.link.toLowerCase()}`}>
                  {linkObj.link}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default NavBar;

const container = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerDirection: 1
    }
  }
}
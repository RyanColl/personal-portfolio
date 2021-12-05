import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Hamburger from '../index/Hamburger';
import Link from 'next/link'
import { useRouter } from 'next/router'
const openMenu = {translateX: 205, height: 100}
const closeMenu = {translateX: 0, height: 500}
const initial = {home: false, projects: false, blog: false, about: false}
const NavBar = ({lightTheme, lightSwitch}: any) => {
  const router = useRouter()
  const [active, setActive] = React.useState({home: true, projects: false, blog: false, about: false})
  const [isOpen, setOpen] = React.useState(false)
  const close = () => setOpen(false)
  useEffect(() => {
    isOpen && window.addEventListener('click', close) 
    return () => window.removeEventListener('click', close)
  })
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
useEffect(() => {
  let route = router.route.replace('/', '')
  if(route==='projects') setActive({...initial, projects: true})
  if(route==='blog') setActive({...initial, blog: true})
  if(route==='about') setActive({...initial, about: true})
  if(route==='') setActive({...initial, home: true})
}, [router.route])
  return (
    <motion.div 
    animate={{x:0}}
    initial={{x: '-100vh'}}
    transition={{duration: 0.5, type: 'spring'}}
    style={{ zIndex: 10 }} className="custom-navbar">
      <motion.div className='nav-item'
        onClick={() => {router.push('/')}}
        animate={{x: 0, opacity: 1}}
        initial={{x: '-10vw', opacity: 0}}
        whileHover={{ rotate: 30 }} whileTap={{ scale: 0.95 }}>
        <div style={{cursor: 'pointer'}} className="nav-logo">
          <img
            style={{ width: "77px", height: "77px" }}
            className="logo"
            src="./logo-p1.png"
          />
        </div>
      </motion.div>
      <motion.div className="nav-right">
        <motion.div className="nav-links nav-item">
          {linkArray.map((linkObj, i) => {
            return (
              <motion.div
                animate={{x: 0, opacity: 1}}
                initial={{x: '-10vw', opacity: 0}}
                transition={{delay: (0.2+0.2*i)}}
                whileHover={{ translateY: -8, scale: 1.07 }}
                key={`nav-link${i}`}
                className={`nav-link ${linkObj.active && "active-link"}`}
              >
                <Link href={`/${linkObj.link==="Home"?'':linkObj.link.toLowerCase()}`}>
                  {linkObj.link}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          animate={{x: 0, opacity: 1}}
          initial={{x: '-10vw', opacity: 0}}
          transition={{delay: 1.2}}
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
                <Link href={`/${linkObj.link==="Home"?'':linkObj.link.toLowerCase()}`}>
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
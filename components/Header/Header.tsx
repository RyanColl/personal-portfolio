
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const Header = ({text, lightTheme}: {text: string, lightTheme: boolean}) => {
    const [width, setWidth] = useState(350)
    useEffect(() => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }, [])
    return (
      <motion.div className="header-styles">
        <motion.h1 variants={sentence} initial="hidden" animate="visible" transition={{delay: 1}} className="large-header">
          {text.split('').map((char, i) => {
            return (
              <motion.span variants={letter} key={char+'-'+i}>{char}</motion.span>
            )
          })}
        </motion.h1>
        <motion.hr initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}} style={{width: '100%', color: lightTheme?'#1F2424':'white'}}></motion.hr>
      </motion.div>
    );
}
export default Header;

const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
}

const letter = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

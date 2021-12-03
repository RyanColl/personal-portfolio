
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TagDropdown from '../blog/TagDropdown';

const Header = ({text, search, tags}: {text: string, search: boolean, tags: string[]}) => {
    const [width, setWidth] = useState(350)
    useEffect(() => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }, [])
    return (
      <motion.div className="header-styles">
        <motion.div className="header-section" style={{display: 'flex', alignItems: 'center'}}>
          <motion.h1 variants={sentence} initial="hidden" animate="visible" transition={{delay: 1}} className="large-header">
            {text.split('').map((char, i) => {
              return (
                <motion.span variants={letter} key={char+'-'+i}>{char}</motion.span>
              )
            })}
          </motion.h1>
          {tags.length>0 && <TagDropdown tags={tags} />}
        </motion.div>
        <motion.hr className="hr-header" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}></motion.hr>
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

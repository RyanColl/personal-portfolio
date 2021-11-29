
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
        <motion.h1 className="large-header">{text}</motion.h1>
        <motion.hr style={{width: '100%', color: lightTheme?'#1F2424':'white'}}></motion.hr>
      </motion.div>
    );
}
export default Header;

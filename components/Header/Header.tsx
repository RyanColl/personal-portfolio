
import { motion } from 'framer-motion';
import React from 'react'

const Header = ({text, lightTheme}: {text: string, lightTheme: boolean}) => {
    return (
        <motion.div className="header-styles">
            <motion.h1 className="large-header">{text}</motion.h1>
            <motion.svg width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2={`${200}`} y2="0" style={{stroke: lightTheme?'black':'white'}}/>
            </motion.svg>
        </motion.div>
    )
}
export default Header;

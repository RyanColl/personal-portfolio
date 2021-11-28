import { motion } from 'framer-motion'
import React from 'react'
function Mountains() {
   
    return (
        <motion.div className="mountain-wrapper">
            <motion.div className="mountain-container">
                <motion.span className="summit-text">{`"Each is master of the summit"`}</motion.span>
                <motion.img 
                whileInView={{opacity: 1, scale: 1}}
                initial={{opacity: 0, scale: 0}} 
                transition={{delay: 0.5, duration: 2.5}}
                viewport={{ once: true }}
                className="mountains" src={'./mountains.svg'} alt="figma-community-mountains" />
            </motion.div>
        </motion.div>
    )
}

export default motion(Mountains)

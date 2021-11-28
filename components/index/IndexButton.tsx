import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export const IndexButton = ({style, text, delay = 0}: any) => {
    return (
        <motion.div initial={{y: 60, scale:0}} animate={{y:0, scale:1}} transition={{type: 'spring', stiffness: 500, delay}} className="index-button-div"><Link href={`/${text.toLowerCase()}`}><motion.button whileHover={{scale: 1.05}} type="button" className="index-button" style={style}>
            {text} 
            <span style={{paddingLeft: 5}} className="iconify" data-icon="fa-regular:arrow-alt-circle-right"></span>
        </motion.button></Link></motion.div>
    )
}

export default IndexButton

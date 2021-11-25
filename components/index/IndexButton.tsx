import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export const IndexButton = ({style, text}: any) => {
    return (
        <div className="index-button-div"><Link href={`/${text.toLowerCase()}`}><motion.button whileHover={{scale: 1.05}} type="button" className="index-button" style={style}>
            {text} 
            <span style={{paddingLeft: 5}} className="iconify" data-icon="fa-regular:arrow-alt-circle-right"></span>
        </motion.button></Link></div>
    )
}

export default IndexButton

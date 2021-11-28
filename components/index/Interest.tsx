import { motion } from 'framer-motion'
import React from 'react'
import { transform } from 'typescript'
interface InterestProps {color: string, text: string, link: string, delay: number}
function Interest({color, text, link, delay}: InterestProps) {
    const interestStyles = {
        // border: `2px dashed ${color}`,
        backgroundImage: `linear-gradient(90deg, ${color} 50%, transparent 50%), linear-gradient(90deg, ${color} 50%, transparent 50%), linear-gradient(0deg, ${color} 50%, transparent 50%), linear-gradient(0deg, ${color} 50%, transparent 50%)`
    }
    return (
        <motion.div initial={{y: 60, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay}} style={interestStyles} className="interest">
            <a href={link}>{text}</a>
        </motion.div>
    )
}

export default Interest

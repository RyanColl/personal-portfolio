import { motion } from 'framer-motion'
import React from 'react'
import IndexButton from '../components/index/IndexButton'
import { image404List } from '../services/document.services'
function Custom404() {
    let num = Math.floor(Math.random() * image404List.length)
    return (
        <motion.div className='image-404-div'>
            <motion.img src={image404List[num]} />
            <motion.span>Page Not Found</motion.span>
            <IndexButton back={true} delay={0.6} text={'Return'} style={{backgroundColor: '#3AF7F0'}} />
        </motion.div>
    )
}

export default Custom404

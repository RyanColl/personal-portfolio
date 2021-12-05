import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
export const IndexButton = (
        {style, text, delay = 0, back = false}: 
        {style: any, text: string, delay: number, back?: boolean}
    ) => {
    const router = useRouter()
    return (
        <motion.div 
        initial={{y: 60, scale:0}} animate={{y:0, scale:1}} 
        transition={{type: 'spring', stiffness: 500, delay}} 
        className="index-button-div">
            <Link href={!back ? `/${text.toLowerCase()}` : ''}>
                <motion.button 
                onClick={() => {back && router.push('/')}}
                whileHover={{scale: 1.05}} type="button" 
                className="index-button" style={style}>
                    {text} 
                    <motion.span
                    style={{paddingLeft: 5}} className="iconify" 
                    data-icon="fa-regular:arrow-alt-circle-right"></motion.span>
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default IndexButton

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import * as Scroll from 'react-scroll';
import { Icon } from '@iconify/react';
const visible = {zIndex: 1, visibility: 'visible', display: 'flex', scale: 1}
const hidden = {zIndex: -10, visibility: 'hidden', display: 'none', scale: 0}
function ScrollButton({lightTheme}: any) {
    const [y, setY] = useState(0)
    useEffect(() => {
        window.onscroll = () => {
            setY(window.pageYOffset)
        }
    })
    
    {/* @ts-ignore */}
    return ( <motion.div initial={hidden} animate={y>600 ? visible:hidden}
        whileHover={{scale: 1.2}}
        transition={{duration: 0.2, ease: 'linear'}}
        onClick={Scroll.animateScroll.scrollToTop}
        className="scroll-button">
            <Icon className="arrow-up" icon="eva:arrow-up-fill" color={lightTheme?"#1F2424":"white"} width="32" />
        </motion.div>
    )
}

export default ScrollButton



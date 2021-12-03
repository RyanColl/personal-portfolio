import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
const TagDropdown = ({tags}: {tags: string[]}) => {
    const [isOpen, setOpen] = useState(false)
    const tagStyles = {
        hidden: {
            display: 'none',
            visibility: 'hidden',
            opacity: 0,
            scale: 0
        },
        visible: {
            display: 'flex',
            visibility: 'visible',
            opacity: 1,
            scale: 1
        }
    }
    return (
        <motion.div 
        onClick={() => {setOpen(!isOpen)}}
        animate={isOpen?{scale: 1.2, rotate: '0deg'}:{scale: 1.2, rotate: '180deg', translateY: -6}}
        transition={{duration: 0.3}} 
        whileTap={{scale: 1.1}} className="dropdown-div">
            <Icon icon="eva:arrow-down-fill" color="white" width="32" />
            {/* @ts-ignore */}
            <motion.div animate={isOpen?tagStyles.visible:tagStyles.hidden} className="tags">
                {tags.length>0 && tags.map((tag, i) => {
                    return (
                        <motion.div 
                        key={`dropdown-tag-${i}`} className='dropdown-tag'>
                            <motion.span>{tag}</motion.span>
                        </motion.div>
                    )
                })}
            </motion.div>
            
        </motion.div>
    )
}

export default TagDropdown

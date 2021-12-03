import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
const TagDropdown = ({tags}: {tags: string[]}) => {
    const [isOpen, setOpen] = useState(false)
    const containerStyles = {
        hidden: {
            display: 'none',
            visibility: 'hidden',
            opacity: 0,
            scale: 0,
            width: 0,
            transition: {
                when: "afterChildren"
            }
        },
        visible: {
            display: 'flex',
            visibility: 'visible',
            opacity: 1,
            scale: 1,
            width: 200,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }
    const tagStyles = {
        hidden: {y: -100, opacity: 0},
        visible: {y: 0, opacity: 1},
        exit: {translateX: -300, opacity: 0}
    }
    return (
        <>
            <motion.div 
            onClick={() => {setOpen(!isOpen)}}
            animate={isOpen?{scale: 1.2, rotate: '0deg'}:{scale: 1.2, rotate: '180deg', translateY: -6}}
            transition={{duration: 0.3}} 
            whileTap={{scale: 1.1}} className="dropdown-div">
                <Icon icon="eva:arrow-down-fill" color="white" width="32" />         
            </motion.div>
            
            {/* @ts-ignore */}
            <motion.div key={'tags'} variants={containerStyles} animate={"visible"} initial="hidden" className="tags">
                {tags.length>0 && tags.map((tag, i) => {
                    return (
                        <AnimatePresence>
                        {isOpen &&   
                            <motion.div
                            animate="visible"
                            initial="hidden"
                            exit="hidden"
                            variants={tagStyles}
                            transition={{delay: 0.1*i}}
                            key={`dropdown-tag-${i}`} className='dropdown-tag'>
                                <motion.span>{tag}</motion.span>
                            </motion.div>
                        }
                        </AnimatePresence>
                    )
                })}
            </motion.div>
            
        </>
    )
}

export default TagDropdown

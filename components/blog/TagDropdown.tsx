import { AnimatePresence, motion, Transition } from 'framer-motion'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
const TagDropdown = ({tags,  setTitle}: {tags: string[], setTitle: Dispatch<SetStateAction<string>>}) => {
    const [isOpen, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
    }
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
            width: 240,
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
    useEffect(() => {
        isOpen && 
        window.addEventListener('click', close) 
        return () => window.removeEventListener('click', close)
    })
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
                {tags.length>0 && tags.filter((value, index, self) => self.indexOf(value) === index) // filters out duplicates in 1 line
                    .map((tag, i) => {
                    return (
                        <AnimatePresence>
                        {isOpen &&  /* @ts-ignore */ 
                            <motion.div whileHover={{scale: 1.1, transition: 0}}
                            onClick={() => {setOpen(!isOpen); setTitle(tag)}}
                            animate="visible"
                            initial="hidden"
                            exit="exit"
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

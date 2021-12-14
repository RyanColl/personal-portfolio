import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
const Project = ({project, i}: any) => {
    const [hovering, setHovering] = useState(false)
    const bottomDivAnims = {
        initial: {
            height: 0, opacity: 0, display: 'none', visibility: 'hidden', zIndex: -10
        },
        animate: {
            opacity: hovering?1:0, height: hovering?30:0, zIndex: 1,
            display: hovering?'flex':'none', visibility: hovering?'visible':'hidden'
        }
    }
    
    return (
        <motion.div 
        onHoverStart={() => {setHovering(true)}}
        onHoverEnd={() => {setHovering(false)}}
        initial={{x: '100vw'}} animate={{x: 0}} transition={{delay: 1.2 + (i*0.4)}} className="project">
            <motion.div className="project-image">
                <a href={project.link!==''?project.link:''}><motion.img style={{height: 205}} src={project.image} /></a> 
            </motion.div>
            <motion.div className="project-description">
                <motion.h1>{project.title}</motion.h1>
                <motion.p>{project.description}</motion.p>
                <a href={project.link!==''?project.link:''}>
                    <motion.span className="learn-more"> 
                        Learn More <Icon icon="akar-icons:arrow-right" color="#32a2c4" width="14" />
                    </motion.span>
                </a>
            </motion.div>
            {/* @ts-ignore */}
            <motion.div initial={bottomDivAnims.initial} animate={bottomDivAnims.animate} className='languages'>
                    {typeof project.languages == 'object' && project.languages.map((language: string, i: number) => {
                        console.log(language.replaceAll(' ','-').toLowerCase())
                        return(
                            <motion.div initial={{opacity: 0}} animate={{opacity: hovering?1:0}} className='language'>
                                {<span className="iconify" data-icon={`logos:${language.replace(' ','-').toLowerCase()}`}></span>}
                            </motion.div>
                        );
                    })}
            </motion.div>
        </motion.div>
    )
}

export default Project


import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
const Project = ({project, i}: any) => {
    return (
        <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{delay: 1.2 + (i*0.4)}} className="project">
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
        </motion.div>
    )
}

export default Project

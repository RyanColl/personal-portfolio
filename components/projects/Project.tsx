import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
const Project = ({project, i}: any) => {
    return (
        <motion.div key={i} className="project">
            <motion.div className="project-image">
                <motion.img style={{height: 205}} src={project.image} /> 
            </motion.div>
            <motion.div className="project-description">
                <motion.h1>{project.title}</motion.h1>
                <motion.p>{project.description}</motion.p>
                <a href={project.link}>
                    <motion.span className="learn-more"> 
                        Learn More <span className="iconify" data-icon="akar-icons:arrow-right" style={{color: '#32a2c4'}} data-width="20"></span>
                    </motion.span>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Project

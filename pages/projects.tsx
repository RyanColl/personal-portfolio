import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Project from '../components/projects/Project'

const ProjectPage = () => {
    const [projects, setProjects] = useState([{title: '', description: '', image: '', link: ''}])
    useEffect(() => {
        fetch('/getProjects').then(i => i.json())
            .then(i => setProjects(i.projects))
    }, [])
    return (
        <motion.div className="projects-page">
            <Header text='Projects'/>
            <motion.div className="projects">
                {projects.length>0 && projects.map((project, i) => {
                    return (
                        <motion.div style={{margin: 0, padding: 0}} key={i}>
                            <Project i={i} project={project} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default ProjectPage

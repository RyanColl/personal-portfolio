import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import ProjectTab from '../components/projects/ProjectTab'
import { getProjects } from '../services/fetch.services'
export interface Project {title:string;description:string;image:string;link:string;languages:string[],backstory:string;}
const ProjectPage = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        // fetch('/getProjects').then(i => i.json())
        //     .then(i => setProjects(i.projects))
        getProjects()
            .then((entry: any) => setProjects(entry.fields.projects))
            .catch((e: any) => console.log(e))
    }, [])
    return (
        <motion.div className="projects-page">
            <Header tags={[]} text='Projects'/>
            <motion.div className="projects">
                {projects.length>0 && projects.map((project, i) => {
                    return (
                        <motion.div style={{margin: 0, padding: 0}} key={i}>
                            <ProjectTab i={i} project={project} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default ProjectPage

import { motion } from 'framer-motion'
import React from 'react'
import Header from '../components/Header/Header'

const ProjectPage = ({lightTheme}: {lightTheme: boolean}) => {
    return (
        <motion.div className="projects-page">
            <Header text='Projects' lightTheme={lightTheme} />
        </motion.div>
    )
}

export default ProjectPage

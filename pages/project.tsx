import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Four04 from '../components/Four04/Four04'
import Header from '../components/Header/Header'
import { getProjects } from '../services/fetch.services'
import { Project } from './projects'
let initialProjObj:Project = {title: '', description: '', image: '', link: '', languages: ['']}
const project = () => {
    const router = useRouter()
    const [project, setProject] = useState('')
    const [projects, setProjects] = useState([initialProjObj])
    useEffect(() => {
        getProjects()
            .then((entry: any) => setProjects(entry.fields.projects as Project[]))
            .catch((e: any) => console.log(e))
    }, [])
    useEffect(() => {
        let project = router.query.project as string
        setProject(project)
    }, [router.query])
    return (
        <motion.div className='project-wrapper'>
            {(projects[0].title!=='' && projects.map(proj => proj.title).includes(project)) ?
                (<>
                <Header text={`${project}`} tags={[]} />
                {projects[0].title!=='' && projects.filter(proj => proj.title === project).map((proj, i) => {
                    return <span>{proj.title}</span>
                })}
                </>)
            : <Four04 />
            }
        </motion.div>
    )
}
export default project

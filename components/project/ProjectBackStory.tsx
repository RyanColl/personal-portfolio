import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Project } from '../../pages/projects'
import { getProject } from '../../services/contentful.services';
import { useRouter } from 'next/router';
interface BackStory {
    nodeType: string;
    content: {value: string;}[];
    data: {
        target? : {
            fields: {
                description: string;
                file: {
                    url: string;
                }
            }
        }
    }
}
const initialBackStory: BackStory = {nodeType: '', content: [{value: ''}], data: {target:{fields:{description:'',file:{url:''}}}}}
const ProjectBackStory = ({project, lightTheme}: {project: Project, lightTheme: boolean}) => {
    const [backStory, setBackStory] = useState([initialBackStory])
    const [backStoryData, setBackStoryData] = useState({date: '', title: ''})
    const router = useRouter()
    useEffect(() => {
        //@ts-ignore 
        getProject(router.query.project.replaceAll('-', '').replaceAll(' ', '').toLowerCase()).then((res:any) => {
            console.log(res.fields)
            setBackStory(res.fields.backstory.content as BackStory[])
            setBackStoryData(res.fields.backstorydata)
        })
      }, [router.route])
    const descriptionStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    console.log(lightTheme)
    const width = typeof window != 'undefined' && window.innerWidth
    return (
        <motion.div className='project-backstory'>
            <motion.div className='backstory-top'>
                <motion.div className='backstory-skills'>
                    {project.languages.map((skill, i) => {
                        return(
                            <motion.div key={`bs-skill-${i+1}`} className='backstory-skill'>
                                
                                {
                                    <motion.a whileHover={{y: 2.5,scale: 1.15}} data-tooltip={skill} data-tooltip-location={width < 600 ? (skill==='Angular'?'top':'bottom') : (i===0?'top':'right')} target={'_blank'} href={`https://www.google.com/search?q=${skill}`} style={{marginTop: 4}}>
                                        {
                                        skill!=='PhaserJS' ? 
                                        
                                        <span id={skill==='Angular'?'angular-icon':skill==='Express'?'express-icon':undefined} className="iconify" color={skill==='React Native' ? '#3AF7F0' : skill==='TypeScript' ? '#007acc' : undefined} data-icon={skill==='React Native'? 'tabler:brand-react-native' : skill==='TypeScript' ? "simple-icons:typescript" : skill==='Angular' ? "logos:angular-icon" : skill==="Express" ? 'simple-icons:express' : `logos:${skill.replaceAll(' ','-').toLowerCase()}`} data-width={(skill!=='Express' && skill!=='Angular') ? 40 : undefined} data-height={(skill!=='Express' && skill!=='Angular') ? 40 : undefined}></span> :
                                        <img src="./phaser.png" style={{width: 42, height: 42}} />
                                        }
                                    </motion.a>
                                }
                                
                            </motion.div>
                        )
                    })}
                </motion.div>
                <motion.div className='backstory-description'>
                    <motion.span whileTap={{scale: 0.96}} whileHover={descriptionStyles} id={`backstory-description-${backStoryData.title.replaceAll(' ', '-')}`}>Description</motion.span>
                    <motion.span>{project.description}</motion.span>
                </motion.div>
            </motion.div>
            {backStory[0].nodeType!=='' ? 
            /* @ts-ignore */
            backStory.map((piece, i) => {
                return(
                    <>
                    {piece.nodeType==='embedded-asset-block' && 
                        <motion.div key={`backstory-image-${i}`} className='backstory-image'>
                            <motion.img onClick={() => window.location.replace(project.link)} whileTap={{scale: 1}} whileHover={{scale: 1.04}} src={backStory[0].nodeType!=='' ? `${piece.data.target!.fields.file.url}` : undefined} />
                            {<motion.span><i>{piece.data.target?.fields.description}</i></motion.span>}
                        </motion.div>
                    }
                    {piece.nodeType==='heading-2' && <motion.div key={`backstory-header-${i}`} className='backstory-header'><motion.span>{piece.content[0].value}</motion.span></motion.div>}
                    {piece.nodeType==='paragraph' && <motion.div key={`backstory-text-${i}`} className='backstory-text'><motion.span>{piece.content[0].value}</motion.span></motion.div>}
                    </>
                )
            })
            : <></>}
        </motion.div>
    )
}

export default ProjectBackStory

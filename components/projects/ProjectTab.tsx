import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
const ProjectTab = ({project, i}: any) => {
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
        id={project.title}
        onHoverStart={() => {setHovering(true)}}
        onHoverEnd={() => {setHovering(false)}}
        initial={{x: '100vw'}} animate={{x: 0}} transition={{delay: 0.6 + (i*0.4)}} className="project">
            <motion.div whileTap={{scale: 0.97}} className="project-image">
                <Link href={{pathname: '/project', query: {'project': `${project.title}`}}}><motion.img style={{height: 205}} src={project.image} /></Link> 
            </motion.div>
            <motion.div className="project-description">
                <motion.h1>{project.title}</motion.h1>
                <motion.p>{project.description}</motion.p>
                <Link href={{pathname: '/project', query: {'project': `${project.title}`}}}>
                    <motion.span className="learn-more"> 
                        Learn More <Icon icon="akar-icons:arrow-right" color="#32a2c4" width="14" />
                    </motion.span>
                </Link>
            </motion.div>
            {/* @ts-ignore */}
            <motion.div initial={bottomDivAnims.initial} animate={bottomDivAnims.animate} className='languages'>
                    {typeof project.languages == 'object' && project.languages.map((language: string, i: number) => {
                        // console.log('language:',language.replaceAll(' ','-').toLowerCase())
                        let gds = 'google-data-studio'
                        return(
                            <motion.div initial={{opacity: 0}} animate={{opacity: hovering?1:0}} className='language'>
                                {
                                <motion.a whileHover={{y: 2.5,scale: 1.15}} data-tooltip={language} data-tooltip-location='bottom' target={'_blank'} href={`https://www.google.com/search?q=${language}`} style={{marginTop: 4}}>
                                    {
                                    language!=='PhaserJS' ? 
                                    <span id={language==='Express' ? 'express-icon-long' : undefined} className="iconify" color={language==='React Native' ? '#3AF7F0' : language==='TypeScript' ? '#007acc' : undefined} data-icon={language==='React Native'? 'tabler:brand-react-native' : language==='TypeScript' ? "simple-icons:typescript" : language==='NEXTJS' ? 'logos:nextjs-icon' : language==='MongoDB' ? 'vscode-icons:file-type-mongo' : language==='SCSS' ? 'vscode-icons:file-type-scss2' :`logos:${language.replaceAll(' ','-').toLowerCase()}`} data-width={(language!=='Express' && language!=='Angular') ? 22 : undefined} data-height={(language!=='Express' && language!=='Angular') ? 22 : undefined}></span> :
                                    <img src="./phaser.png" style={{width: 24, height: 24}} />
                                    }
                                </motion.a>
                                }
                            </motion.div>
                        );
                    })}
            </motion.div>
        </motion.div>
    )
}

export default ProjectTab


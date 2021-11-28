import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import IndexButton from './IndexButton'
const properSize = {height: 400, width: 400}
const smallSize = {height:325, width: 325}
const IndexWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 800px; 
    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`
const ImageContainer = styled(motion.div)`
    margin: 12px;
    align-self: center;
    @media only screen and (max-width: 500px) {
        margin: 0;
    }
`
function IndexContent() {
    return (
        <IndexWrapper>
            <motion.div initial={{scale: 0}} animate={{scale:1}} transition={{type: 'spring', delayChildren: 2}} className="welcome-container">
                <ImageContainer
                animate={{x:0, opacity: 1}}
                initial={{x: '-100vw', opacity: 0}}
                transition={{delay: 1.6}}
                ><img src='./comp1.png' className='desk-img' /></ImageContainer>
                <motion.div className='welcome-content'>
                    <motion.div className='word-wrapper'>
                        <motion.div 
                        initial={{y: 50, scale: 0}} 
                        animate={{y:0, scale: 1}} 
                        transition={{delay: 2.4}}  
                        className='name-span'>{'<Ryan>'}</motion.div>
                        <motion.span 
                        transition={{delay: 2.5}} 
                        initial={{scale:0}} 
                        animate={{scale: 1}}
                        className='fswd'>Full Stack Web Developer</motion.span>
                        <motion.div 
                        initial={{y: -50, scale: 0}} 
                        animate={{y:0, scale: 1}} 
                        transition={{delay: 2.4}} 
                        className='name-span'>{'</Ryan>'}</motion.div>
                        <motion.span
                         initial={{x: '100vw'}} 
                         animate={{x: 0}}
                         transition={{delay: 3}}
                        className='under-msg'>Creating a brighter future through coding</motion.span>
                    </motion.div>
                    <motion.div className="index-buttons">
                        <IndexButton delay={3.2} text={'Projects'} style={{backgroundColor: '#F13EA8'}} /> 
                        <IndexButton delay={3.4} text={'Blog'} style={{backgroundColor: '#3AF7F0'}} /> 
                    </motion.div>
                    
                </motion.div>
            </motion.div>
        </IndexWrapper>
    )
}

export default motion(IndexContent)
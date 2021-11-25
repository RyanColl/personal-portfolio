import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const properSize = {height: 400, width: 400}
const smallSize = {height:325, width: 325}
const IndexWrapper = styled.div`
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
    @media only screen and (max-width: 500px) {
        margin: 0;
    }
`
const NameSpan = styled.h1`
    color: #3AF7F0;
    font-size: 54px;
    margin-left: 70px;
`
function IndexContent() {
    return (
        <IndexWrapper>
            <div className="welcome-container">
                <ImageContainer><img src='./comp1.png' className='desk-img' /></ImageContainer>
                <motion.div className='welcome-content'>
                    <div className='word-wrapper'>
                        <div className='name-span'>{'<Ryan>'}</div>
                        {/* <span className='fswd'>Full Stack Web Developer</span> */}
                        <div className='name-span'>{'</Ryan>'}</div>
                    </div>
                    
                </motion.div>
            </div>
        </IndexWrapper>
    )
}

export default IndexContent

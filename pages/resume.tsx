import { motion } from 'framer-motion'
import React from 'react'
import DownloadButton from '../components/Resume/DownloadButton'

const resume = () => {
    return (
        <motion.div className='resume-wrapper'>
            <motion.object
            className='resume-object' 
            data="your_url_to_pdf" type="application/pdf">
                <motion.iframe  
                transition={{ delay: 1.2 }}
                initial={{opacity: 0, y: 300, x: 300}} 
                animate={{opacity: 1, x: 0, y: 0}} 
                width="100%" height="100%" allow='autoplay' src="https://drive.google.com/file/d/1g69erBYixPCjhVLrdqulcbaIJP0lXGr9/preview"></motion.iframe>
            </motion.object>
            <DownloadButton />
        </motion.div>
    )
}

export default resume

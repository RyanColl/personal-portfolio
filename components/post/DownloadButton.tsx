import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
const DownloadButton = ({text, lightTheme}: {text: string, lightTheme: boolean}) => {
    const download = () => {
        var link=document.createElement('a');
        link.href = `./${text}`;
        link.download = `./${text}`.substr(`./${text}`.lastIndexOf('/') + 1);
        link.click();
    }
  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className='download-file' onClick={download}>
        <span className='dl'>{text}</span>&nbsp;&nbsp;<Icon icon="akar-icons:download" style={{color: lightTheme?'white':'#2e2e2e', width: 24, height: 24}} />
    </motion.div>
  )
}

export default DownloadButton
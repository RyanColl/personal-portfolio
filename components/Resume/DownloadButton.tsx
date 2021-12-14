import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
const DownloadButton = () => {
    const download = () => {
        window.open('https://drive.google.com/u/0/uc?id=1g69erBYixPCjhVLrdqulcbaIJP0lXGr9&export=download')
    }
    return (
        <motion.div onClick={download} className='dl-button'>
            <Icon icon="akar-icons:download" width="24px" color="#2e2e2e" />
        </motion.div>
    )
}

export default DownloadButton

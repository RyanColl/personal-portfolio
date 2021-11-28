import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
const [darkColor, lightColor] = ['#1F2424', 'white']


function Footer({lightTheme}: {lightTheme: boolean}) {
    const icons = [
        {
            name: 'email',
            link: '',
            onClick: () => {

            },
            Icon: <Icon icon="whh:emailexport" color={lightTheme?darkColor:lightColor} />
        }
    ]
    return (
        <motion.div className="footer">
            <motion.div className="div className"></motion.div>
        </motion.div>
    )
}

export default Footer

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
const [darkColor, lightColor] = ['#1F2424', 'white']


function Footer({lightTheme}: {lightTheme: boolean}) {
    const [emailSuccessMsg, setMsg] = useState('')
    const icons = [
        {
            name: 'email',
            link: '',
            onClick: () => {  
                navigator.clipboard.writeText('rcollicutt@my.bcit.ca')
                    .then((success) => {
                        setMsg('Email Copied To Clipboard!')
                        setTimeout(() => {
                            setMsg('')
                        }, 3000)
                    })
                    .catch((e) => {
                        alert(e)
                    })
            },
            Link: ({className = ''}: any) => <Icon className={className} icon="whh:emailexport" color={lightTheme?darkColor:lightColor} width="32" />
        },
        {
            name: 'github',
            onClick: () => { },
            link: 'https://github.com/RyanColl',
            Link: ({className = ''}: any) => <Icon className={className} icon="zmdi:github-box" color={lightTheme?darkColor:lightColor} width="32" />
        },
        {
            name: 'linkedin',
            onClick: () => { },
            link: 'https://www.linkedin.com/in/rcollicutt-react-developer/',
            Link: ({className = ''}: any) => <Icon className={className} icon="fa:linkedin-square" color={lightTheme?darkColor:lightColor} width="32" />
        }
    ]
    
    return (
        <>
            {emailSuccessMsg!=='' && <motion.div className="copy-message">Email copied to clipboard</motion.div>}
            <motion.div className="footer">
                <motion.div className="icon-container">
                    {icons.map(({name, link, onClick, Link}: any, i: number) => {     
                            return(
                                <motion.a key={i} id={name} onClick={onClick} href={link===''?`#${name}`:link} className={name}>
                                    <motion.div>
                                        <Link className={'icon'} />
                                    </motion.div>
                                </motion.a>
                            )
                    })}
                </motion.div>
                <div className="brand">
                    <span>RColl Dev •|•  © 2021  •|• Ryan Collicutt</span>
                </div>
            </motion.div>
        </>
    )
}

export default Footer

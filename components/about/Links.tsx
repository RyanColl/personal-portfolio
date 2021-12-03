import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

function Links() {
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
                        }, 4000)
                    })
                    .catch((e) => {
                        alert(e)
                    })
            },
            Link: ({className = ''}: any) => <Icon className={className} icon="logos:google-gmail" width="32" />
        },
        {
            name: 'github',
            onClick: () => { },
            link: 'https://github.com/RyanColl',
            Link: ({className = ''}: any) => <Icon className={className} icon="zmdi:github-box" color='#181717' width="32" />
        },
        {
            name: 'linkedin',
            onClick: () => { },
            link: 'https://www.linkedin.com/in/rcollicutt-react-developer/',
            Link: ({className = ''}: any) => <Icon className={className} icon="fa:linkedin-square" color='#1275B1' width="32" />
        },
        {
            name: 'spotify',
            onClick: () => { },
            link: 'https://open.spotify.com/user/ryancollicutt22',
            Link: ({className = ''}: any) => <Icon className={className} icon="akar-icons:spotify-fill" color='#1ED760' width="32" />
        }
    ]
    return (
        <>
        {emailSuccessMsg!=='' && <motion.div className="copy-message"><span>Email copied to clipboard</span></motion.div>}
            <motion.div className='about-link-container'>
            {icons.map(({name, link, onClick, Link}: any, i: number) => {    
                return(
                    <motion.a 
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ delay: (0.25*i)+1}}
                    key={i} id={name} onClick={onClick} 
                    href={link===''?undefined:link} className={name}>
                        <motion.div>
                            <Link className={'icon'} />
                        </motion.div>
                    </motion.a>
                )
            })}
            </motion.div>
        </>
    )
}

export default Links

import { motion } from 'framer-motion'
import React from 'react'
import { Icon } from '@iconify/react';
const visible = {zIndex: 1, visibility: 'visible', display: 'flex', scale: 1}
const hidden = {zIndex: -10, visibility: 'hidden', display: 'none', scale: 0}
const LikeButton = ({lightTheme}: {lightTheme: boolean}) => {
    const [y, setY] = React.useState(0)
    React.useEffect(() => {
        window.onscroll = () => {
            setY(window.pageYOffset)
        }
    })
 
    const [liked, setLiked] = React.useState(false)   
    console.log(liked, y)
    {/* @ts-ignore */}
  return ( <motion.div className='like-button' initial={hidden} animate={visible}
    whileHover={{scale: 1.2}}
    transition={{duration: 0.2, ease: 'linear'}}
    onClick={() => {setLiked(!liked)}}>
        <Icon style={{color: liked?'teal':''}} icon="fontisto:like" width="32" height="32" />
    </motion.div>
  )
}

export default LikeButton
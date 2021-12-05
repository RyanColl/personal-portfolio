import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/router'
import { Image } from '../../pages/post'
const UnderConstruction = ({postNumber, images}: {postNumber: number, images: Image[]}) => {
    const router = useRouter()
    return (
        <motion.div  className="under-constr">
            <motion.img className="under-constr-img" src='./under_constr2.png' />
            <motion.h1 className="under-constr-h1">Currently Under Construction, Check Back Soon!</motion.h1>
            <motion.div onClick={() => {router.push('/blog')}}
            whileHover={{scale: 1.1}} whileTap={{scale: 1}} className="go-back">Return</motion.div>
        </motion.div>
    )
}

export default UnderConstruction

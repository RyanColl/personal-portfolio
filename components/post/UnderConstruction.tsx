import { motion } from 'framer-motion'
import React from 'react'
import { useRouter } from 'next/router'
const UnderConstruction = ({postNumber}: {postNumber: number}) => {
    const router = useRouter()
    const images = [
        {
            id: 1,
            image: './under_constr1.png'
        },
        {
            id: 2,
            image: './under_constr2.png'
        },
    ]
    return (
        <motion.div  className="under-constr">
            {postNumber && images.filter(({id}, i) => postNumber === id).map(({image}, i) => {
                return <motion.img key={i} className="under-constr-img" src={image} />
            })}
            <motion.h1 className="under-constr-h1">Currently Under Construction, Check Back Soon!</motion.h1>
            <motion.div onClick={() => {router.push('/blog')}}
            whileHover={{scale: 1.1}} whileTap={{scale: 1}} className="go-back">Return</motion.div>
        </motion.div>
    )
}

export default UnderConstruction

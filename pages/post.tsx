import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UnderConstruction from '../components/post/UnderConstruction'
const post = () => {
    const router = useRouter()
    const [postNumber, setPostNumber] = useState(0)
    useEffect(() => {
        let post = router.query.post as string
        setPostNumber(parseInt(post))
    }, [router.query])
    // console.log(postNumber)
    
    return (
        <motion.div>
            <UnderConstruction postNumber={postNumber} />
        </motion.div>
    )
}

export default post

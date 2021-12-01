import { motion } from 'framer-motion'
import React, { useState } from 'react'
import SearchBar from '../components/blog/SearchBar'
import Header from '../components/Header/Header'

const blog = () => {
    const [postsTitle, setPostsTitle] = useState('All Posts')
    return (
        <motion.div className="blog-wrapper">
            <Header search={true} text={postsTitle} />
            <motion.div className="posts">

            </motion.div>
        </motion.div>
    )
}

export default blog

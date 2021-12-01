import { motion } from 'framer-motion'
import React from 'react'

const SearchBar = () => {
    return (
        <motion.div style={{width: '100%'}}>
            <motion.input className="search-bar" type="text" placeholder="Search..."  />
        </motion.div>
    )
}

export default SearchBar

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const SearchBar = ({formSubmit, setValue, value}: any) => {
    return (
        <motion.form 
        initial={{y: 800, opacity: 0}} animate={{y: 0, opacity: 1}}
        transition={{ type: 'spring' , duration: 1}}
        onSubmit={formSubmit} className="search-div">
            <motion.input className="search-bar" type="text" placeholder="Search..." 
            value={value} onChange={({target: {value}}) => {setValue(value)}}  />
            <motion.button whileTap={{scale: 0.9}} type="submit" className="mag-glass">
                <Icon color="white" width="40" icon="healthicons:magnifying-glass" />
            </motion.button>
        </motion.form>
    )
}

export default SearchBar

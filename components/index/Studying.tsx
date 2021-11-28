import React from 'react'
import { motion } from 'framer-motion'
import Mountains from './Mountains'
function Studying() {
    const h1Text = {
        p1: 'Studying',
        p2: '<Web Development />',
        p3: 'at BCIT has taught me',
    }
    return (
        <>
        <motion.div className='studying-wrapper'>
            <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type:"spring", stiffness: 50 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150}
            }}>
                <span>{h1Text.p1}</span>
                <span>{` ${h1Text.p2} `}</span>
                <span>{h1Text.p3}</span>
            </motion.h1>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, type:"spring" }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 150}
            }}
            className="arms-div">
                <motion.div whileHover={{scale: 1.025}} transition={{duration: 0.3}} className="arms-inner-div">
                    <motion.img whileHover={{scale: 1.025}} transition={{duration: 0.3}} style={{width: '90%', height: '90%'}} src={'./Bcit.jpeg'} />
                </motion.div>
            </motion.div>
            
        </motion.div>
        <Mountains />
        </>
    )
}
export default Studying

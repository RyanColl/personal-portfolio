import { motion } from 'framer-motion'
import React from 'react'
import { myDetails } from '../../services/document.services';
function MyDetails() {
    return (
        <>
            {myDetails.map((detail, i) => {
                return(
                    <motion.div 
                    initial={{y: 100, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1}} 
                    transition={{delay: 0.3*i, duration: 0.3}} 
                    key={i}>
                        <motion.span className={i===0?'first-span':''}>{detail}</motion.span>
                        <br/> <br/>
                    </motion.div>
                );
            })}
        </>
    )
}

export default MyDetails

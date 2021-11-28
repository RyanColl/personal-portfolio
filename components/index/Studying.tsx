import React from 'react'
import { motion } from 'framer-motion'
function Studying() {
    const h1Text = {
        p1: 'Studying',
        p2: '<Web Development />',
        p3: 'at BCIT has taught me',
    }
    return (
        <motion.div className='studying-wrapper'>
            <motion.h1>{h1Text.p1}<span id="web-dev">{` ${h1Text.p2} `}</span>{h1Text.p3}</motion.h1>
            <motion.div className="arms-div">
                <motion.div className="arms-inner-div">
                    <img style={{width: '90%', height: '90%'}} src={'./Bcit.jpeg'} />
                </motion.div>
            </motion.div>
            <motion.div className="mountains">

            </motion.div>
        </motion.div>
    )
}
const h1Styles = {
    color: '#3AF6EF',
    fontSize: 32,
}
export default Studying

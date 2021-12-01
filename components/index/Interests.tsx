import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { getInterests } from '../../services/fetch.services'
import Interest from './Interest'

function Interests() {
    const [interests, setInterests] = useState([{text: '', color: '', link: ''}])
    const h1Text = {
        p1: 'Some of my',
        p2: '<Interests />',
        p3: 'are',
    }
    useEffect(() => {
        // fetch('/interests').then(i => i.json())
        //     .then(i => setInterests(i.interests.interests))
        getInterests()
          .then((entry: any) => setInterests(entry.fields.interests))
          .catch((e: any) => console.log(e))
    }, [])
    return (
      <motion.div className="interests-wrapper">
        <motion.h1 initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -150 } }}
          className="interest-h1">
          <span>{h1Text.p1}</span>
          <span>{` ${h1Text.p2} `}</span>
          <span>{h1Text.p3}</span>
        </motion.h1>
        <motion.div className="interests-container">
            {interests.length>0 && interests.map((interest, i) => {
                return <Interest delay={i*0.2} key={i} link={interest.link} color={interest.color} text={interest.text} />
            })}
        </motion.div>
      </motion.div>
    );
}

export default Interests

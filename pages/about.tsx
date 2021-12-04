import { motion } from 'framer-motion'
import React from 'react'
import Links from '../components/about/Links';
import MyDetails from '../components/about/MyDetails';
import Header from '../components/Header/Header'
const about = () => {
    return (
      <motion.div className="about-page">
        <Header tags={[]} text="About" />
        <motion.div className="about">
          <motion.div className="my-details">
            <motion.div className="my-image">
              <motion.img
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="webtech-gif"
                src="./webtech.gif"
              />
              <motion.img
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="webtech-gears"
                src="./gears.png"
              />
            </motion.div>
            <motion.h4
              viewport={{ once: true }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="h4"
            >
              Ryan Collicutt
            </motion.h4>
            <motion.span
              viewport={{ once: true }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="details-text"
            >
              Full Stack Web Development
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="details-text"
            >
              British Columbia Institute of Technology
            </motion.span>
            <Links />
          </motion.div>
          <motion.div className="my-story">
            <MyDetails />
          </motion.div>
        </motion.div>
      </motion.div>
    );
}

export default about

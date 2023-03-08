import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text=[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text[17px] max-w-3xl leading-[30px]"
      >
        For the majority of life I built with my hands and when I looked at technology, software, the internet etc. like most people I thought of these intellectual Harvard science types who did complex math problems all day (Interesting fact: most people I've met with those degrees haven't actually written much code). I never associated technology with building or creating, I considered it to be one of those things in life, like being a doctor, or a lawyer or an astronaut that were possible but maybe something you had to start planning on earlier in life if you want to get into.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About

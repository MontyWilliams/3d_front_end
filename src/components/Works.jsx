import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style.js'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following are not all the projects I have created but they showcase my skill
          and understanding of the front and back end of web development. Each project includes 
          a link to the github wher you will find a rich commit history detailing my thought process
          through each step of the project as well as a link to a live demo of the project hosed 
          online. It reflects a desire and ability to build and create applications using a variety of
          tools.
        </motion.p>
      </div>
      <div className="mt-20 flexl flex-wrap gap-7">
        {projects.map((project,index) => {
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")

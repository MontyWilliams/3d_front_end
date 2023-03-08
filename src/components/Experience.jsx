import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion }  from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style.js'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience}) => {
  <VerticalTimelineElement
    contentStyle={{ bckground: '#1d1836', color: '#fff' }}
  >

  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Check out what Ive done so far</p>
        <h2 className={styles.sectionHeadText}>work experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')

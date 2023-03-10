import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailJs from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default SectionWrapper(Contact, "")

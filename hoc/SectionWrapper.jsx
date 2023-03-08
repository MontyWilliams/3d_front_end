import { motion } from 'framer-motion'
import { styles } from './style.js'
import { staggeContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.section>
                <Component />
            </motion.section>
        )
    }
}

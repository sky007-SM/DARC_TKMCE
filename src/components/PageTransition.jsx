import { motion, useReducedMotion } from 'framer-motion'

const PageTransition = ({ children }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
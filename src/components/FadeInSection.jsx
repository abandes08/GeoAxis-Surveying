import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function FadeInSection({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 576);
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isSmallScreen ? { opacity: 1, y: 0 } : undefined} // always visible on small
      whileInView={isSmallScreen ? undefined : { opacity: 1, y: 0 }} // normal on larger screens
      transition={{ duration: 0.7 }}
      viewport={isSmallScreen ? undefined : { once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;
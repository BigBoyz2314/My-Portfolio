import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            reapeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div
            className="textContainer" 
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
                <motion.h2 variants={textVariants}>ZAIN IMRAN</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button 
                        variants={textVariants} 
                        onClick={() => document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' })}
                    >
                        See The Lasted Works
                    </motion.button>
                    <motion.button 
                        variants={textVariants} 
                        onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" animate="scrollButton" variants={textVariants} />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Developer Designer Debugger
        </motion.div>
        <div className="imageContainer">
            <img src="/zain.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
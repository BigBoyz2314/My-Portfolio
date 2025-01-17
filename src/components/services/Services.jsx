import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    const handleClick = (e, item) => {
        e.preventDefault();
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>What We Do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Custom Web Development</h2>
                    <p>Crafting bespoke websites tailored to your unique needs, combining cutting-edge technology, responsive design, and seamless user experience to bring your vision to life.</p>
                    <button onClick={(e) => handleClick(e, "Contact")}>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Wix Development</h2>
                    <p>Building dynamic and user-friendly websites on Wix, leveraging custom functionality, seamless integrations, and stunning designs to elevate your online presence.</p>
                    <button onClick={(e) => handleClick(e, "Contact")}>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>PHP Development</h2>
                    <p>Creating robust and efficient backend solutions with PHP, specializing in dynamic websites, custom applications, and seamless database integration for optimal performance.</p>
                    <button onClick={(e) => handleClick(e, "Contact")}>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Next.js / React.js Development</h2>
                    <p>Developing modern, high-performance web applications with Next.js and React, focusing on scalability, seamless user interfaces, and optimized server-side rendering for a superior user experience.</p>
                    <button onClick={(e) => handleClick(e, "Contact")}>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
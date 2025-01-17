import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";


const items = [
    {
        id: 1,
        title: "Hyundai Premium Website",
        img: "/Hyundai.png",
        desc: "Complete Website for Hyundai Premium Dealership in Lahore, Pakistan.",
        link: "https://hyundaipremium.com",
    },
    {
        id: 2,
        title: "Footprint ERP Prodution Management System",
        img: "/Footprint.jpg",
        desc: "A Core PHP Based Comprehensive Enterprise Resource Planing & Production Managment System Currently in use in the Industry.",
        link: "https://zazsoft.com/footprint.html"
    },
    {
        id: 3,
        title: "Parcels.com Landing Page",
        img: "/parcels.png",
        desc: "A Parcel Delivery Website in the UK.",
        link: "https://parcels.com"
    },
    {
        id: 4,
        title: "PHP HR Management System",
        img: "/hr.png",
        desc: "A Core PHP Based Human Resource Management System.",
        link: "https://zazsoft.com"
    },
    {
        id: 5,
        title: "MERN Todo App",
        img: "/todo.png",
        desc: "A Basic MERN CRUD Application",
        link: "https://zazsoft.com"
    },
];

const Single = ({item}) => {
    
    const ref = useRef();
    
    const { scrollYProgress } = useScroll({ target: ref });

    // Always define `y` and `x` using hooks unconditionally
    const yAnimation = useTransform(scrollYProgress, [0, 1], [-250, 250]);
    const xAnimation = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Detect screen size
    const isSmallScreen = window.innerWidth <= 768;

    // Define final values for `y` and `x` based on screen size
    const y = isSmallScreen ? 10 : yAnimation; // Fixed `y` for small screens
    const x = isSmallScreen ? xAnimation : 0; // `x` animation for small screens only

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y, x }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}>Learn More</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({target: ref , offset: ["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, { stiffness:100, damping:30 });

  return (
    <div className="portfolio" ref={ref} id="Portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
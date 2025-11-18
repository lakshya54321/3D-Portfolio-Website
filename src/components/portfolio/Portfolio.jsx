import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Hospital Management System",
    desc: `A Java-based Hospital Management System that streamlines patient, employee, room, and ambulance operations through an interactive Swing & AWT interface with JDBC-backed database connectivity.`
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "3D Portfolio Website",
    desc: ` There are 4 pages like\n
    1. Profile info and photo\n
    2. 3D laptop and work details\n 
    3. Portfolio and accomplishment\n
    4. Contact section`,
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Code Hustle 10.0 - UPES x GeeksforGeeks Hackathon Participant",
    desc: "Participated in Code Hustle 10.0, a competitive coding and innovation hackathon featuring teams from multiple universities. Gained practical exposure to building solutions under strict time limits, brainstorming project ideas, and working in a high-pressure environment focused on creativity and technology.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "rone Technology Bootcamp - UPES x NIT Kurukshetra",
    desc: "Completed the Drone Technology Bootcamp 2024 by NIT Kurukshetra in collaboration with UPES. Gained hands-on insight into drone systems, sensor integration, AI-based enhancements, and real-world applications of drone technology.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Introduction to MongoDB - Simplilearn SkillUp Certification",
    desc: "Completed Simplilearn's Introduction to MongoDB course, learning core concepts of NoSQL, CRUD operations, indexing, and database structure.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants} className="desc">
  {item.desc}
</motion.p>

        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
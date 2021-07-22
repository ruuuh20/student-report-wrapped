import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  show: {
    opacity: 0.8,
    scale: 1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
}

const item2 = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  show: {
    opacity: 0.8,
    // y: 0,
    scale: 1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
}

const Loader = ({ setLoading }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  //   return () => clearTimeout(timer)
  // })

  return (
    <motion.div className="loader">
      <motion.div
        className="loader-inner"
        // variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
      >
        <motion.div className="page-wrapper page-wrapper-loader">
          <motion.div
            layoutId="main-circle"
            variants={item}
            className="circle-wrapper-loader"
          >
            <motion.div
              className="circle circle-1 circle-1-loader"
              // initial={{ x: 100 }}
              // style={{ x: "20%", y: "50%" }}
            >
              <div className="texture"></div>
              <Link className="page-link" to="/student">
                {/* <h5>STUDENT </h5>
                <span>Show me my report</span> */}
                <h5>PEAK EDU</h5>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="circle-wrapper-loader"
            // variants={item2}
            layoutId="main-circle-2"
          >
            <motion.div
              className="circle circle-2 circle-2-loader"

              // style={{ y: 100 }}
              // initial={{ x: 100 }}
            >
              <div className="texture"></div>
              <Link className="page-link" to="/">
                {/* <h5>PARENT</h5>
                <span>Show me my child's report</span> */}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <StaticImage src="../images/image-1.jpg" alt={id} />
    </motion.div>
  )
}
export default Loader

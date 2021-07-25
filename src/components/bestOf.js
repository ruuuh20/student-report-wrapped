import React from "react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const BestOf = ({ handleCloseButton }) => {
  const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

  const fade = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="best-wrapper"
      style={{
        margin: "0 auto",
        padding: "4rem",
      }}
    >
      <motion.div className="" variants={fade}>
        <button className="back-arrow" onClick={handleCloseButton}>
          <span className="button__icon">Go back</span>
        </button>
        <h2
          style={{
            fontSize: "4rem",
            fontFamily: "Montserrat",
            fontWeight: "400",
          }}
        >
          Your best-written essays:
        </h2>
        <div className="intro-container">
          <p>
            <span
              className="highlight2"
              data-text="Writing is a life-long skill that students will use for the rest of
              their days."
            >
              Writing is a life-long skill that students will use for the rest
              of their days.
            </span>
            <br />
            That’s why it’s so important that parents know how well their kids
            are progressing in writing and what steps they can take in order to
            improve in less-than-strong areas.
          </p>
        </div>

        <div className="row best-row">
          <div className="essay-item">
            <div className="image-container rounded blur2">
              <StaticImage src="../images/reading1.png" alt="writing-topic" />
            </div>
            <div className="text-container">
              <div className="text-title">
                <h4>Writing Topic</h4>
                <hr />
              </div>
              <div className="info">
                <p>Topic: _ </p>
                <p>Comments:</p>
              </div>
            </div>
          </div>
          <div className="essay-item">
            <div className="image-container rounded blur2">
              <StaticImage src="../images/reading1.png" alt="writing-topic" />
            </div>
            <div className="text-container">
              <div className="text-title">
                <h4>Book Topic</h4>
                <hr />
              </div>
              <div className="info">
                <p>Book: </p>
                <p>Comments:</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row best-row"></div>
      </motion.div>
    </motion.div>
  )
}

export default BestOf

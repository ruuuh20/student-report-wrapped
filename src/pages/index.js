import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { gsap } from "gsap"
import Loader from "../components/loader"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook {
        edges {
          node {
            title
            author
            description {
              id
              description
            }
            thumbnail {
              gatsbyImageData(width: 200)
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <div className="page-wrapper">
              <motion.div
                className="landing-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
              >
                <h2>
                  Student <br /> Report <br /> Wrapped
                </h2>
                <div className="lines">
                  <span>Spring 2021</span>
                </div>
              </motion.div>
              <div className="col-50">
                <motion.div
                  className="circle-wrapper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId="main-circle"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                >
                  <motion.div className="circle circle-1">
                    <div className="texture"></div>
                    <Link className="page-link" to="/student">
                      <h5>STUDENT </h5>
                      <span>Show me my report</span>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="circle-wrapper"
                  layoutId="main-circle-2"
                  transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 1.6 }}
                >
                  <motion.div className="circle circle-2">
                    <div className="texture"></div>
                    <Link className="page-link" to="/parent">
                      <h5>PARENT</h5>
                      <span>Show me my child's report</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default IndexPage

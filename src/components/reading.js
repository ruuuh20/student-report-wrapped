import React, { useRef, useState, useEffect } from "react"
import { useTable } from "react-table"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import WritingBar from "./writingBar"
import LineChart from "./lineChart"
import ModalImage from "react-modal-image"
import icon from "../images/pencil.svg"
import arrowIcon from "../images/arrow-right.svg"
import checkIcon from "../images/check-circle.svg"
import smileIcon from "../images/iconmonstr-smiley-2.svg"
import frownIcon from "../images/iconmonstr-smiley-6.svg"
import { motion } from "framer-motion"
import { useInView, InView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  RevealLeft,
  RevealRight,
  GradientRevealLeft,
  ImageReveal,
  GradientRevealRightLarge,
  ImageParallax,
} from "../components/revealHelpers"

const Reading = ({ handleCloseButton }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const [ref1, inView1] = useInView({
    threshold: 0.5,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      })
    }
  }, [inView])

  const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

  const fade = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  }

  const contentfulData = useStaticQuery(graphql`
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
      allContentfulReadingAssignment {
        edges {
          node {
            title

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

  const data = React.useMemo(
    () => [
      {
        col1: "3/1",
        col2: "Book 1",
        col3: "✓ Completed",
        col4: "93",
      },
      {
        col1: "3/8",
        col2: "Book 1",
        col3: "✓ Completed",
        col4: "90",
      },
      {
        col1: "3/15",
        col2: "Book 1",
        col3: "✓ Completed",
        col4: "89",
      },
      {
        col1: "3/22",
        col2: "Book 2",
        col3: "✓ Completed",
        col4: "95",
      },
      {
        col1: "3/29",
        col2: "Book 2",
        col3: "✓ Completed",
        col4: "99",
      },
      {
        col1: "4/6",
        col2: "Book 2",
        col3: "✓ Completed",
        col4: "95",
      },
      {
        col1: "4/5",
        col2: "Book 3",
        col3: "✓ Completed",
        col4: "97",
      },
      {
        col1: "4/20",
        col2: "Book 3",
        col3: "✓ Completed",
        col4: "97",
      },
      {
        col1: "4/12",
        col2: "Book 3",
        col3: "✓ Completed",
        col4: "91",
      },
      {
        col1: "4/19",
        col2: "Book 4",
        col3: "✓ Completed",
        col4: "100",
      },
      {
        col1: "4/27",
        col2: "Book 4",
        col3: "✓ Completed",
        col4: "100",
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Assignment",
        accessor: "col2",
      },
      {
        Header: "Statis",
        accessor: "col3",
      },
      {
        Header: "Grade",
        accessor: "col4",
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="reading-wrapper"
      style={{
        margin: "0 auto",
      }}
    >
      <motion.div variants={fade}>
        <section className="reading-hero">
          {/* <div
          className="bg-circle"
          // style={{ clipPath: "circle(55% at 75% 50%)" }}
        ></div> */}
          <div className="container">
            <button className="back-arrow" onClick={handleCloseButton}>
              <span className="button__icon">Go back</span>
            </button>
            <div className="headline row">
              <h2>
                Let's go over your <br />
                reading report
              </h2>
            </div>
            <div
              className="values-container row reading"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item" style={{ zIndex: "999" }}>
                Average grade<span className="lg-value">A+</span>
              </div>
              <div className="values-item" style={{ zIndex: "999" }}>
                Reading score <span className="lg-value">94%</span>
              </div>
              <div className="values-item" style={{ zIndex: "999" }}>
                Attendance <span className="lg-value">10/10</span>
              </div>
              <div className="values-item" style={{ zIndex: "999" }}>
                Homework <span className="lg-value">15/15</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row chart-container">
            <WritingBar />
          </div>
          <div className="row chart-container">
            <LineChart />
          </div>
        </section>
        <section>
          <RevealLeft>
            <span className="scroll-text scroll-left">Responses</span>
          </RevealLeft>
          <div className="container">
            <div className="headline">
              <p>
                Based on your most recent book assignments and feedback, we
                found the following:
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="row list-container left">
              <img className="rotate-img" src={smileIcon} />
              <div className="list-wrap-s">
                <div className="sub-headline">
                  <h4>
                    Your <br />
                    <strong>strengths </strong>
                    <br /> are:
                  </h4>
                </div>
                <div className="list-item item-s">
                  &#8226; book comprehension
                </div>
                <div className="list-item item-s">
                  &#8226; use of evidence to support assertions
                </div>
                <div className="list-item item-s">
                  &#8226; paragraph development
                </div>
              </div>
            </div>
            <div className="row list-container right">
              <img className="rotate-img" src={frownIcon} />
              <div className="list-wrap-w">
                <div className="sub-headline">
                  <h4>
                    You <br />
                    could <br />
                    <strong>improve</strong>
                    <br />
                    on:
                  </h4>
                </div>
                <div className="list-item item-w">
                  &#8226; analysis of themes
                </div>
                <div className="list-item item-w">
                  &#8226; depth and quality of the analysis
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <p
              style={{
                padding: "0 2rem",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <p>
                      <span className="highlight1">
                        Your reading responses have shown improvement in various
                        areas. <img width={40} src={checkIcon} alt="check" />
                      </span>

                      <span></span>
                    </p>
                  </motion.div>
                )}
              </InView>
            </p>
            <div className="row">
              <div
                className="flex"
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
              >
                <div className="row old">
                  <ImageParallax>
                    <div className="relative">
                      <p className="title-md">This is from Jan 15,</p>
                      <ImageReveal></ImageReveal>
                      <div className="img-wrapper blur">
                        <StaticImage src="../images/reading1.png" alt="essay" />
                      </div>
                    </div>
                  </ImageParallax>
                </div>
                <div className="arrow-right">
                  <img
                    style={{ opacity: ".7", marginTop: "1rem" }}
                    src={arrowIcon}
                    alt="arrow"
                  />
                </div>
                <div className="row new">
                  <ImageParallax>
                    <div className="relative">
                      <p className="title-md">and this is from April 1</p>
                      <div className="img-wrapper blur">
                        <StaticImage src="../images/reading2.png" alt="essay" />
                      </div>
                    </div>
                  </ImageParallax>
                </div>
              </div>
            </div>
            <div className="flex row" style={{ justifyContent: "center" }}>
              <div className="comment-card">
                <div className="comment-card-icon-container">
                  <span className="comment-title">Comment</span>
                  <img className="pencil-icon" src={icon} alt="icon" />
                </div>
                <p>
                  John is able to offer more direct responses to her reading
                  experiences supported by reasons, examples, and details.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#196A9F" }}>
          <RevealRight>
            <span className="scroll-text scroll-right outline-blue">
              Homework
            </span>
          </RevealRight>
          <div className="container">
            <div className="row">
              <table
                {...getTableProps()}
                style={{ border: "solid 1px white", maxWidth: "450px" }}
              >
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            border: "solid 1px #F2CC8F",
                            borderBottom: "solid 3px #196A9F",
                            background: "#F2CC8F",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: "3px",
                                border: "solid 1px gray",
                                background: "#f0faf1",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className="headline headline-p">
                <p style={{ color: "#f0faf1" }}>
                  Awesome job, you completed all reading/book assignments.
                </p>
                <p style={{ color: "#f0faf1" }}>
                  Your highest grade was <span className="lg red">100%</span>and
                  lowest was <span className="lg red">89%</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <RevealLeft>
            <span className="scroll-text scroll-left">Essays</span>
          </RevealLeft>
          <div className="container">
            <div className="flex" ref={ref} style={{ paddingTop: "1rem" }}>
              <div className="headline-s">
                <p>You read these books over the last few months...</p>
              </div>
              <motion.div
                className="grid-12 books-container"
                animate={animation}
              >
                {contentfulData.allContentfulBook.edges.map((grid, index) => (
                  <Grid
                    index={index}
                    title={grid.node.title}
                    imageUrl={grid.node.thumbnail.file.url}
                    image={grid.node.thumbnail}
                    //   handleGridItem={handleGridItem}
                    //   handleClick={handleClick}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="flex" ref={ref1}>
              <div className="headline-s">
                <p>
                  and wrote weekly short-answer responses (click to view larger)
                </p>
              </div>
              <motion.div
                className="grid-12 books-container"
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {contentfulData.allContentfulReadingAssignment.edges.map(
                  (grid, index) => (
                    <Grid
                      index={index}
                      title={grid.node.title}
                      imageUrl={grid.node.thumbnail.file.url}
                      image={grid.node.thumbnail}
                      //   handleGridItem={handleGridItem}
                      //   handleClick={handleClick}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>
        <section className="part-section">
          <RevealRight>
            <span className="scroll-text scroll-right">Participation</span>
          </RevealRight>
          <div className="container">
            <div
              className="values-container row reading"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item col-3">
                <p style={{ fontSize: "2rem", lineHeight: "1.5" }}>
                  You participated and contributed a lot to the class.
                </p>
              </div>
              <div className="values-item" style={{ textAlign: "center" }}>
                Participation <span className="lg-value">A</span>
              </div>
              <div className="values-item" style={{ textAlign: "center" }}>
                Attendance <span className="lg-value">10/10</span>
              </div>
            </div>
            <div className="flex row" style={{ justifyContent: "center" }}>
              <div className="comment-card">
                <div className="comment-card-icon-container">
                  <span className="comment-title">Comment</span>
                  <img className="pencil-icon" src={icon} alt="icon" />
                </div>
                <p>
                  John is focused in class and willingly participates in class
                  discussions.
                </p>
                <p>
                  John was very engaged and focused during distance learning
                  activities, and participated in discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="headline">
                    <p>Reading Comprehension</p>
                  </div>
                </motion.div>
              )}
            </InView>

            <div className="flex row" style={{ justifyContent: "center" }}>
              <div className="comment-card">
                <div className="comment-card-icon-container">
                  <span className="comment-title">Comment</span>
                  <img className="pencil-icon" src={icon} alt="icon" />
                </div>
                <p>
                  John shows good ability when completing reading comprehension
                  tests.
                </p>
                <p>
                  He is able to analyze character actions, story plots, and
                  shows strong fluency with reading.
                </p>
                <p>
                  He determines various forms of writing and identifies
                  important ideas through the development of insightful
                  questions and answers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "5rem 0" }}>
          <div className="container">
            <h3 className="closing">
              That's a wrap &#8212;
              <br />
              <span style={{ marginLeft: "80px", marginTop: "20px" }}>
                Have a great summer!
              </span>
            </h3>
          </div>
        </section>
      </motion.div>
    </motion.div>
  )
}

const Grid = ({
  title,
  index,
  imageUrl,
  image,
  handleClick,
  handleGridItem,
}) => {
  const grid = useRef()
  const [hoverState, setHoverState] = useState(false)

  let image1 = getImage(image)

  // gsap.registerPlugin(ScrollTrigger)
  // gsap.core.globals("ScrollTrigger", ScrollTrigger)

  // useEffect(() => {
  //   const element = ref.current
  //   gsap.fromTo(
  //     element.current,
  //     {
  //       opacity: 0,
  //       y: -20,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: element.current,
  //         start: "top top",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     }
  //   )
  // }, [])

  return (
    <>
      <motion.a
        whileHover={{ scale: 1.1 }}
        className={`grid-item-writing`}
        ref={grid}
        style={{ display: "grid", textAlign: "center" }}

        // onMouseOver={handleGridItem}
        // onClick={handleClick}
      >
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          {title}
        </span>

        <ModalImage
          style={{
            transform:
              "matrix(0.99756, -0.06976, 0.06976, 0.99756, 1.09615, 11.3958)",
          }}
          small={imageUrl}
          medium={imageUrl}
          hideDownload={true}
          alt={title}
        />
      </motion.a>
    </>
  )
}

export default Reading

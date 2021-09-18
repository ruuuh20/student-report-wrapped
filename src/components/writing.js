import React, { useRef, useState } from "react"
import { useTable } from "react-table"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WritingBar from "./writingBar"
import LineChart from "./lineChart"
import ModalImage from "react-modal-image"
import icon from "../images/pencil.svg"
import arrowIcon from "../images/arrow-right.svg"
import checkIcon from "../images/check-circle.svg"
import { motion } from "framer-motion"
import { useInView, InView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import {
  RevealLeft,
  RevealRight,

} from "../components/revealHelpers"

const Writing = ({ handleCloseButton }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulWritingAssignment(sort: { fields: createdAt }) {
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
      allContentfulRevision(sort: { fields: createdAt }) {
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
        col1: "3/15",
        col2: "Book Essay",
        col3: "✓ Completed",
      },
      {
        col1: "3/22",
        col2: "NYT Outline",
        col3: "✓ Completed",
      },
      {
        col1: "3/29",
        col2: "NYT Essay",
        col3: "✓ Completed",
      },
      {
        col1: "4/6",
        col2: "NYT Essay - revision",
        col3: "✓ Completed",
      },
      {
        col1: "4/5",
        col2: "Book Essay",
        col3: "✓ Completed",
      },
      {
        col1: "4/20",
        col2: "Book Essay - revision",
        col3: "Missing",
      },
      {
        col1: "4/12",
        col2: "NYT Outline",
        col3: "✓ Completed",
      },
      {
        col1: "4/19",
        col2: "NYT Essay",
        col3: "Incomplete",
      },
      {
        col1: "4/27",
        col2: "NYT Essay - revision",
        col3: "Incomplete",
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
        Header: "Grade",
        accessor: "col3",
      },
    ],
    []
  )

  const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

  const fade = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  }

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
      className="writing-wrapper"
      style={{
        margin: "0 auto",
        zIndex: "999",

        display: "block",
        minHeight: "90vh",
      }}
    >
      <motion.section variants={fade}>
        <section class="writing-hero">
          <div className="container">
            <button className="back-arrow" onClick={handleCloseButton}>
              <span className="button__icon">Go back</span>
            </button>
            {/*
            <div
              className="bg-circle"
              style={{ clipPath: "circle(55% at 75% 50%)" }}
            ></div> */}
            <div className="headline row">
              <h2>John's <span className="rel">writing<strong className="visible accent-circle">&nbsp;</strong></span> overview</h2>
            </div>
            <div
              className="values-container row reading"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item" style={{ zIndex: "999" }}>
                Average grade<span className="lg-value">A</span>
              </div>
              <div className="values-item" style={{ zIndex: "999" }}>
                Writing score <span className="lg-value">92%</span>
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
      </motion.section>
      <section>
        <div className="container">
          <div className="row writing-intro">
            <p>
              <span
                className="highlight2"
                data-text="Writing is a life-long skill that students will use for the rest
              of their days. "
              >
                Writing is a life-long skill that students will use for the rest
                of their days.
              </span> <br/>
              That’s why it’s so important that parents know how well their kids
              are progressing in writing and what steps they can take in order
              to improve in less-than-strong areas.
            </p>
            <p>
              His greatest strength is writing. He writes with fluent
              organization and does a phenomenal job “showing and not telling”
              details.
            </p>
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
        <div className="container">
          <div className="headline">
            <p>Based on your essay feedback, we found the following:</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-m">
          <div className="row list-container left">
            <div className="list-wrap-s">
              <div className="sub-headline">
                <h4>
                  Your <br />
                  <strong>strengths </strong>
                  <br /> are:
                  <br />
                </h4>
              </div>
              <div className="list-item item-s">&#8226; word choice</div>
              <div className="list-item item-s">
                &#8226; use of evidence to support assertions
              </div>
              <div className="list-item item-s">
                &#8226; paragraph development
              </div>
            </div>
          </div>
          <div className="row list-container right">
            <div className="list-wrap-w">
              <div className="sub-headline">
                <h4>
                  He <br />
                  could <br />
                  improve
                  <br />
                  on:
                </h4>
              </div>
              <div className="list-item item-w">
                &#8226; organizing ideas in <br />a logical sequence
              </div>
              <div className="list-item item-w">
                &#8226; depth and quality of the analysis
              </div>
              <div className="list-item item-w">&#8226; grammar errors</div>
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
            <span className="highlight">
              Your writing responses have shown great improvement in several
              areas.
            </span>
            <span>
              <img width={40} src={checkIcon} alt="check" />
            </span>
          </p>
          <div className="row">
            <div
              className="flex"
              style={{ justifyContent: "space-evenly", alignItems: "center" }}
            >
              <div className="row old">
                <p>A passage from 1/15</p>
                <div className="img-wrapper">
                  <StaticImage src="../images/reading1.png" alt="essay" />
                </div>
              </div>
              <div className="arrow-right">
                <img
                  style={{ opacity: ".7", marginTop: "1rem" }}
                  src={arrowIcon}
                  alt="arrow"
                />
              </div>
              <div className="row new">
                <p>and one from 4/1</p>
                <div className="img-wrapper">
                  <StaticImage src="../images/reading2.png" alt="essay" />
                </div>
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

      <section style={{ background: "#bbdaee" }}>
        <RevealRight>
            <span className="scroll-text scroll-right outline-blue">
              Homework
            </span>
          </RevealRight>
        <div className="container">
          <div className="row">
            <div className="headline headline-p">
              <p>
                He missed 1 assignment but completed all other writing
                assignments, including book reports and NYT essays. He also
                worked on revisions of essays.
              </p>
            </div>
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
                          borderBottom: "solid 3px #e0530e",
                          background: "#D5D7CE",
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
                              background: "white",
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
          </div>
        </div>
      </section>

      <section>
         <RevealLeft>
            <span className="scroll-text scroll-left">Essays</span>
          </RevealLeft>
        <div className="container">
          <div className="headline">
            <p>
              Here are some of his essays and feedback (click to
              view larger)
            </p>
          </div>

          <div className="grid-12 essays">
            {contentfulData.allContentfulWritingAssignment.edges.map(
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
          </div>
        </div>

        <div className="container">
          <div className="headline">
            <p>These are your revisions</p>
          </div>

          <div className="grid-12 essays">
            {contentfulData.allContentfulRevision.edges.map((grid, index) => (
              <Grid
                index={index}
                title={grid.node.title}
                imageUrl={grid.node.thumbnail.file.url}
                image={grid.node.thumbnail}
                //   handleGridItem={handleGridItem}
                //   handleClick={handleClick}
               
              />
            ))}
          </div>
        </div>
      </section>

      <section className="writing-part-bg">
          <RevealRight>
            <span className="scroll-text scroll-right">Other</span>
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
              He participated and contributed a lot to the class.
              </p>
            </div>
            <div
              className="values-item"
              style={{ color: "#DBD437", textAlign: "center" }}
            >
              Participation{" "}
              <span className="lg-value" style={{ color: "#DBD437" }}>
                A
              </span>
            </div>
            <div
              className="values-item"
              style={{ color: "#DBD437", textAlign: "center" }}
            >
              Attendance{" "}
              <span className="lg-value" style={{ color: "#DBD437" }}>
                10/10
              </span>
            </div>
          </div>
          <div className="flex row" style={{ justifyContent: "center" }}>
            <div className="comment-card">
              <div className="comment-card-icon-container">
                <span className="comment-title">Comment</span>
                <img className="pencil-icon" src={icon} alt="icon" />
              </div>
              <p>John is enthusiastic about participating.</p>
              <p>
                John is focused in class and willingly participates in class
                discussions.
              </p>
              <p>
                John stayed motivated to complete assignments during distance
                learning, and turned in all required materials on time.
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

  return (
    <>
      <a
        className={`grid-item-writing`}
        ref={grid}
        style={{ display: "grid", justifyItems: "center" }}
        data-title="Evenner"
        // onMouseOver={handleGridItem}
        // onClick={handleClick}
       
      >
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: "400",
            alignSelf: "center",
          }}
        >
          {title}
        </span>

        <ModalImage
          small={imageUrl}
          medium={imageUrl}
          hideDownload={true}
          alt={title}
        />
      </a>
    </>
  )
}

export default Writing

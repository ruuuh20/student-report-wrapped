import React, { useRef, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import ModalImage from "react-modal-image"
import WritingBar from "./writingBar"
import { useTable } from "react-table"
import icon from "../images/pencil.svg"
import PieChart from "./pieChart"
import smileIcon from "../images/iconmonstr-smiley-2.svg"
import frownIcon from "../images/iconmonstr-smiley-6.svg"

const VocabTab = ({ handleCloseButton, user }) => {
  const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

  const fade = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  }

  const data = React.useMemo(
    () => [
      {
        col1: "Assignment",
        col2: "Lesson 9",
        col3: "✓ Completed",
      },
      {
        col1: "Assignment",
        col2: "Lesson 10",
        col3: "✓ Completed",
      },
      {
        col1: "Assignment",
        col2: "Lesson 11",
        col3: "✓ Completed",
      },
      {
        col1: "Assignment",
        col2: "Lesson 12",
        col3: "✓ Completed",
      },
      {
        col1: "Quiz",
        col2: "Lessons 9-12",
        col3: "90%",
      },
      {
        col1: "Assignment",
        col2: "Lesson 13",
        col3: "✓ Completed",
      },
      {
        col1: "Assignment",
        col2: "Lesson 14",
        col3: "✓ Completed",
      },
      {
        col1: "Assignment",
        col2: "Lesson 15",
        col3: "Incomplete",
      },
      {
        col1: "Assignment",
        col2: "Lesson 16",
        col3: "✓ Completed",
      },
      {
        col1: "Quiz",
        col2: "Lessons 13-15",
        col3: "91%",
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "-",
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
      <motion.div
        className="reading-tab-wrapper"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div className="rc-grid" variants={fade}>
          <section className="rc-row numbers">
            <div
              className="values-container reading-values vocab-values rc"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item">
                <span className="text-sm">
                  The vocabulary section consists of (1) assigned vocab
                  exercises per week, (2)review and questions during class,
                  (3)vocab quiz every 4 lessons.
                </span>
              </div>
              <div className="values-item">
                <span className="label">Vocab grade</span>
                <span className="lg-value">A-</span>
              </div>
              <div className="values-item">
                <span className="label">Class Average</span>
                <span className="lg-value">B-</span>
              </div>

              <div className="values-item">
                <span className="label">Homework</span>{" "}
                <span className="lg-value">90%</span>
              </div>
            </div>
          </section>

          <section className="rc-col rc-col-1">
            <span data-v-712d00a9="" className="line--top"></span>
            <div className="chart-container pie">
              <PieChart />
            </div>
          </section>
          <section className="rc-col rc-col-1-2">
            <span data-v-712d00a9="" className="line--top"></span>
            <div className="chart-container">
              <WritingBar />
            </div>
          </section>
          <section className="rc-col rc-col-2">
            <span data-v-712d00a9="" className="line--top"></span>
            <div className="header">
              <h4 className="title">Homework assignments</h4>
            </div>
            <div className="table-wrapper">
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
            </div>
          </section>

          <section className="rc-col rc-writing rc-col-full row-4">
            <span className="line--top"></span>
            <h4>Book</h4>
            <StaticImage src="../images/068844.jpeg" alt="vocab" />
          </section>

          <section className="rc-col rc-writing rc-col-full row-6">
            <span className="line--top"></span>
            <h4>Revisions</h4>
          </section>

          <div className="rc-row rc-feedback">
            <div className="flex flex-wrap flex-m">
              <p>✓ Has a good understanding of vocaublary.</p>
              <p>✓ Regularly follows detailed instructions</p>
              <p>✓ Grasps new vocabulary readily</p>
            </div>
          </div>

          <div className="rc-col rc-col-4 rc-writing rc-participation row-7">
            <span data-v-712d00a9="" className="line--top"></span>
            <span class="line--left" data-v-2e8f64aa=""></span>
            <div className="rc flex">
              <div className="values-item">
                <span className="label">Participation</span>{" "}
                <span className="lg-value">A-</span>
              </div>
              <div className="values-item">
                <span className="label">Attendance</span>{" "}
                <span className="lg-value">95%</span>
              </div>
              <div className="values-item">
                <span className="label">Absences</span>{" "}
                <span className="lg-value">1</span>
              </div>
            </div>
            <div className="comments-and-feedback">
              <div className="rc-col rc-col-5 comments-col">
                <div className="comment-wrapper">
                  <div className="comment-card">
                    <div className="comment-card-icon-container">
                      <span className="comment-title">Comments</span>
                      <img className="pencil-icon" src={icon} alt="icon" />
                    </div>
                    <p>
                      &#8226; Is focused, attentive, and an active participant
                      in class discussions
                    </p>
                    <p> &#8226; Consistently submits work on time</p>
                    <p>
                      {" "}
                      &#8226; Consistently prepares materials for (online)
                      learning
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="rc-col rc-writing rc-left row-7">
            <span data-v-712d00a9="" className="line--top"></span>
            <p>
              His greatest strength is writing. He writes with fluent
              organization and does a phenomenal job “showing and not telling”
              details.
            </p>
            <p>
              {" "}
              He exhibits good use of grammar and mechanics, and writing pieces
              are well-organized with clear details.
            </p>
            <p>He has shown great improvement with writing and analysis.</p>
          </div>
        </motion.div>
      </motion.div>
    </>
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
      <motion.a
        className={`grid-item-writing`}
        ref={grid}
        style={{ display: "grid", textAlign: "center" }}

        // onMouseOver={handleGridItem}
        // onClick={handleClick}
      >
        <span
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            fontWeight: "400",
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
      </motion.a>
    </>
  )
}

export default VocabTab

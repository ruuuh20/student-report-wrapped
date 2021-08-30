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

const WritingTab = ({ handleCloseButton, user, writingData }) => {
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
        Header: "Status",
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
              className="values-container reading-values writing-values rc"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item">
                <span className="text-sm">
                  The writing section consists of weekly writing assignments
                  (book topics and writing topics) and revisions during class.
                </span>
              </div>
              <div className="values-item">
                <span className="label">Writing grade</span>
                <span className="lg-value">A-</span>
              </div>
              <div className="values-item">
                <span className="label">Class Average</span>
                <span className="lg-value">B+-</span>
              </div>

              <div className="values-item">
                <span className="label">Homework</span>{" "}
                <span className="lg-value">94%</span>
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
            <h4>Essays and feedback (click to view larger)</h4>
            <div className="grid-12 essays">
              {writingData.allContentfulWritingAssignment.edges
                .slice(0, 8)
                .map((grid, index) => (
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
          </section>

          <section className="rc-col rc-writing rc-col-full row-6">
            <span className="line--top"></span>
            <h4>Revisions</h4>
            <div className="grid-12 essays">
              {writingData.allContentfulRevision.edges
                .slice(0, 8)
                .map((grid, index) => (
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
          </section>

          <div className="rc-row rc-feedback writing">
            <div className="flex flex-wrap flex-m">
              <div className="row list-container left">
                <img className="rotate-img" src={smileIcon} />
                <div className="list-wrap-s">
                  <div className="sub-headline">
                    <h4>strengths</h4>
                  </div>
                  <div className="list-item item-s">
                    &#8226; Is able to successfully organize thoughts and
                    develop paragraphs
                  </div>
                  <div className="list-item item-s">
                    &#8226; Demonstrates sentence fluency within writing
                  </div>
                  <div className="list-item item-s">
                    &#8226; Demonstrates consistent effort in using evidence to
                    support arguments
                  </div>
                </div>
              </div>
              <div className="row list-container right">
                <img className="rotate-img" src={frownIcon} />
                <div className="list-wrap-w">
                  <div className="sub-headline">
                    <h4>Needs improvement</h4>
                  </div>
                  <div className="list-item item-w">
                    &#8226; Needs to pay closer attention to commentary on
                    evidence
                  </div>
                  <div className="list-item item-w">
                    &#8226; Has difficulty with variation in sentence structures
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rc-col rc-col-4 rc-writing rc-participation row-7">
            <span data-v-712d00a9="" className="line--top"></span>
            <span class="line--left" data-v-2e8f64aa=""></span>
            <div className="flex rc">
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

export default WritingTab

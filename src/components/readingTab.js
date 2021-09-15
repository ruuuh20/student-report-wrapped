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

const ReadingTab = ({ handleCloseButton, user }) => {
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
        Header: "Status",
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
    <>
      <motion.div
        className="reading-tab-wrapper"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="rc-grid">
          <section className="rc-row numbers">
            <div
              className="values-container reading-values rc"
              style={{
                display: "flex",
              }}
            >
              <div className="values-item">
                <span className="text-sm">
                  The reading component consists of fiction novels, weekly
                  reading responses, and vocabulary exercises.
                </span>
              </div>
              <div className="values-item">
                <span className="label">Reading grade</span>
                <span className="lg-value">A</span>
              </div>
              <div className="values-item">
                <span className="label">Class Average</span>
                <span className="lg-value">A-</span>
              </div>

              <div className="values-item">
                <span className="label">Homework</span>{" "}
                <span className="lg-value">100%</span>
              </div>
            </div>
          </section>

          <section className="rc-col rc-col-1">
            <span className="line--top"></span>
            <div className="chart-container pie">
              <PieChart />
            </div>
          </section>
          <section className="rc-col rc-col-1-2">
            <span className="line--top"></span>
            <div className="chart-container">
              <WritingBar />
            </div>
          </section>
          <section className="rc-col rc-col-2">
            <span className="line--top"></span>
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
          {/* <section className="rc-col">
            {" "}
            
          </section> */}
          <section className="rc-col rc-col-3">
            <span className="line--top"></span>
            <div className="grid-12 books-container">
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
            </div>
          </section>

          <div className="rc-row rc-feedback">
            <div className="flex flex-wrap">
              <div className="row list-container left">
                <img className="rotate-img" src={smileIcon} />
                <div className="list-wrap-s">
                  <div className="sub-headline">
                    <h4>strengths</h4>
                  </div>
                  <div className="list-item item-s">
                    &#8226; recall higher-level comprehension questions
                  </div>
                  <div className="list-item item-s">
                    &#8226; use of evidence to support assertions
                  </div>
                  <div className="list-item item-s">
                    &#8226; summarizes fiction texts with main ideas from the
                    beginning, middle, and end
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
                    &#8226; analysis of themes
                  </div>
                  <div className="list-item item-w">
                    &#8226; depth and quality of the analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rc-col rc-col-4 rc-participation">
            <span className="line--top"></span>
            <span className="line--left"></span>
            <div className="flex rc reading-values">
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
                      John was very engaged and focused during distance learning
                      activities, and participated in discussions.
                    </p>
                    <p>
                      {" "}
                      John is focused in class and willingly participates in
                      class discussions.
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="rc-col rc-col-6">
            <span className="line--top"></span>
            <div className="quiz-table-wrapper">
              <div className="grid-table">
                <div>
                  <span className="header">Book quiz</span>
                  <span className="header">Grade</span>
                </div>
                <div>
                  <span className="title">Abel's Island Quiz</span>
                  <span className="grade">18/20</span>
                </div>
                <div>
                  <span className="title">Nine Open Arms Quiz</span>
                  <span className="grade">14/20</span>
                </div>
                <div>
                  <span className="title">Maniac Magee Quiz</span>
                  <span className="grade">19/20</span>
                </div>
              </div>
            </div>
          </div>
          <section className="rc-col rc-col-7">
            <span className="line--top"></span>
            <p>
              John demonstrates good progress in using a variety of reading
              comprehension skills and strategies to understand text. He also
              has a fantastic work ethic.
            </p>
            <p>
              {" "}
              He puts forth a lot of effort. However, analyzing characters and
              themes of the book is still difficult for him. Please continue to
              reinforce skills at home.
            </p>
          </section>
        </div>
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
        whileHover={{ scale: 1.1 }}
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
            fontWeight: "500",
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

export default ReadingTab

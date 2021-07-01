import React, { useRef, useState } from "react"
import { useTable } from "react-table"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import WritingBar from "./writingBar"
import ModalImage from "react-modal-image"
import icon from "../images/pencil.svg"
import arrowIcon from "../images/arrow-right.svg"
import checkIcon from "../images/check-circle.svg"

const Reading = ({ handleCloseButton }) => {
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
    <div
      className="reading-wrapper"
      style={{
        margin: "0 auto",
      }}
    >
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
      </section>
      <section>
        <div className="container">
          <div className="headline">
            <p>
              Based on your recent book assignments and feedback, we found the
              following:
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="row list-container left">
            <div className="list-wrap-s">
              <div className="sub-headline">
                <h4>
                  Your <br />
                  <strong>strengths </strong>
                  <br /> are:
                </h4>
              </div>
              <div className="list-item item-s">&#8226; book comprehension</div>
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
                  You <br />
                  could <br />
                  improve
                  <br />
                  on:
                </h4>
              </div>
              <div className="list-item item-w">&#8226; analysis of themes</div>
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
            <span className="highlight">
              Your reading responses have shown great improvement in several
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
          <div className="row flex" style={{ justifyContent: "center" }}>
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
        <div className="container">
          <div className="row">
            <div className="headline headline-p">
              <p style={{ color: "#f0faf1" }}>
                Awesome job, you completed all reading/book assignments.
              </p>
              <p style={{ color: "#f0faf1" }}>
                Your highest grade was <span className="lg red">100%</span>and
                lowest was <span className="lg red">89%</span>.
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
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex">
            <div className="headline-s">
              <p>You read these books over the last few months...</p>
            </div>
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
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex">
            <div className="headline-s">
              <p>
                and wrote weekly short-answer responses (click to view larger)
              </p>
            </div>
            <div className="grid-12 books-container">
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
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(120,75,55)", color: "#eeeeee" }}>
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
          <div className="headline">
            <p>Reading Comprehension</p>
          </div>
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
                He is able to analyze character actions, story plots, and shows
                strong fluency with reading.
              </p>
              <p>
                He determines various forms of writing and identifies important
                ideas through the development of insightful questions and
                answers.
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
    </div>
  )
}

const Grid = ({
  title,
  index,

  imageUrl,
  image,
  handleClick,
  handleGridItem,
  styleOptions,
}) => {
  const grid = useRef()
  const [hoverState, setHoverState] = useState(false)

  let image1 = getImage(image)

  return (
    <>
      <a
        className={`grid-item-writing`}
        ref={grid}
        style={{ display: "grid" }}

        // onMouseOver={handleGridItem}
        // onClick={handleClick}
      >
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: "400",
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
      </a>
    </>
  )
}

export default Reading

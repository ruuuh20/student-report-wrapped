import React, { useRef, useState } from "react"
import { useTable } from "react-table"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WritingBar from "./writingBar"
import ModalImage from "react-modal-image"


const Vocabulary = ({ handleCloseButton }) => {
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
        Header: "Assignment",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Lessons",
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
    <div
      className="writing-wrapper"
      style={{
        margin: "0 auto",
        zIndex: "999",

        display: "block",
        minHeight: "90vh",
      }}
    >
      <section className="vocab-hero">
        <div className="container">
          <button className="back-arrow" onClick={handleCloseButton}>
            <span className="button__icon">Go back</span>
          </button>

          {/* <div
            className="bg-circle"
            style={{ clipPath: "circle(55% at 75% 50%)" }}
          ></div> */}
          <div className="headline row">
            <h2>John's <span className="rel">vocabulary<strong className="visible accent-circle">&nbsp;</strong></span> overview</h2>
          </div>
          <div
            className="values-container row"
            style={{
              display: "flex",
            }}
          >
            <div className="values-item" style={{ zIndex: "999" }}>
              Average<span className="lg-value">88%</span>
            </div>
            <div className="values-item" style={{ zIndex: "999" }}>
              Vocab grade <span className="lg-value">91%</span>
            </div>
            <div className="values-item" style={{ zIndex: "999" }}>
              Attendance <span className="lg-value">9/10</span>
            </div>
            <div className="values-item" style={{ zIndex: "999" }}>
              Homework <span className="lg-value">7/15</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row chart-container">
          <WritingBar />
        </div>
      </section>
      <div className="img-wrapper-vocab">
        <StaticImage src="../images/vocabbook.jpg" alt="evocab book" />
      </div>
         <div className="flex flex-col flex-wrap">
                <p>✓ Has a good understanding of vocabulary</p>
                <p>✓ Regularly follows detailed instructions</p>
                <p>✓ Grasps new vocabulary readily</p>
          </div>
      
      

      <section style={{ background: "#C36839" }}>
        <div className="container">
          <div className="row">
            <div className="headline headline-p">
              <p>
                Here are your vocab quiz grades
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
        data-title="Evenner"
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

export default Vocabulary

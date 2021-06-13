import React, { useMemo, useRef, useState } from "react"
import { useTable } from "react-table"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WritingBar from "./writingBar"
import ModalImage from "react-modal-image"

const Writing = ({ handleCloseButton }) => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulWritingAssignment {
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
        Header: "",
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
        // display: "flex",
        // flexDirection: "column",
        padding: "0 20px",
        margin: "0 auto",
        zIndex: "999",
        maxWidth: "980px",
        display: "block",
        minHeight: "90vh",
      }}
    >
      <button className="back-arrow" onClick={handleCloseButton}>
        <span class="button__icon">Go back</span>
      </button>
      <div
        className="bg-circle"
        style={{ clipPath: "circle(55% at 75% 50%)" }}
      ></div>
      <div className="headline row">
        <h2>Your writing score improved since the last report!</h2>
      </div>
      <div
        className="values-container row"
        style={{
          display: "flex",
        }}
      >
        <div className="values-item" style={{ zIndex: "999" }}>
          Your average is<span className="lg-value">92%</span>
        </div>
        <div className="values-item" style={{ zIndex: "999" }}>
          Your essay score is <span className="lg-value">94%</span>
        </div>
        <div className="values-item" style={{ zIndex: "999" }}>
          Attendance <span className="lg-value">9/10</span>
        </div>
        <div className="values-item" style={{ zIndex: "999" }}>
          Homework <span className="lg-value">7/15</span>
        </div>
      </div>
      <section>
        <div className="row chart-container">
          <WritingBar />
        </div>
      </section>
      <div className="row list-container">
        <h3>Based on your essay feedback...</h3>
        <div className="face-s"></div>
        <div className="list-wrap-s">
          <div className="sub-headline">Your strengths are:</div>
          <div className="list-item item-s">&#8226; paragraph development</div>
          <div className="list-item item-s">
            &#8226; use of evidence and support
          </div>
          <div className="list-item item-s">&#8226; word choice</div>
        </div>
      </div>
      <div className="row list-container">
        <div className="face-w"></div>
        <div className="list-wrap-w">
          <div class="sub-headline">Some things you could work on:</div>
          <div className="list-item item-w">
            &#8226; organizing ideas in <br />a logical sequence
          </div>
          <div className="list-item item-w">&#8226; grammar errors</div>
          <div className="list-item item-w">&#8226; proofreading</div>
        </div>
      </div>

      <div className="row">
        <div className="headline">
          <p>
            You missed 1 assignment, but you completed almost all writing
            assignments, including book reports and NYT essays. You also worked
            on revisions.
          </p>
        </div>
        <table
          {...getTableProps()}
          style={{ border: "solid 1px white", maxWidth: "450px" }}
        >
          {/* <thead>
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
            </thead> */}
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

      <section>
        <div className="headline">
          <p>
            You can take a look at some of your essays and feedback (click to
            view larger)
          </p>
        </div>
      </section>

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
              data-title="Evenner"
            />
          )
        )}
      </div>
    </div>
  )
}

const Grid = ({
  title,
  index,
  video,
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
        style={{ display: "grid" }}
        data-title="Evenner"
        // onMouseOver={handleGridItem}
        // onClick={handleClick}
        data-title="Evenner"
      >
        <div>{title}</div>
        {/* <GatsbyImage className="essay-img" image={image1} alt={title} /> */}
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

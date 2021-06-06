import React, { useMemo, useRef, useState } from "react"
import { useTable } from "react-table"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

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
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 25px",
        margin: "0 auto",
        zIndex: "999",
        maxWidth: "960px",
      }}
    >
      <div
        className="values-container"
        style={{
          display: "flex",
        }}
      >
        <div style={{ zIndex: "999" }}>
          Your average is<span className="lg-value">92%</span>
        </div>
        <div style={{ zIndex: "999" }}>
          Your essay score is <span className="lg-value">94%</span>
        </div>
        <div style={{ zIndex: "999" }}>
          Attendance <span className="lg-value">9/10</span>
        </div>
        <div style={{ zIndex: "999" }}>
          Homework <span className="lg-value">7/15</span>
        </div>
      </div>
      <div className="row">
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

      <button style={{ zIndex: "999" }} onClick={handleCloseButton}>
        Close
      </button>
      <div className="flex row">
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
      <div className="flex row">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At possimus ea
        esse inventore nemo adipisci qui eveniet omnis iusto mollitia non cum
        velit recusandae consequatur, porro nam unde eos quisquam!
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
        <GatsbyImage className="essay-img" image={image1} alt={title} />
      </a>
    </>
  )
}

export default Writing

import React, { useEffect, useState, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Writing from "../components/writing"

import { gsap } from "gsap"

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

  const [contentOpen, setContentOpen] = useState(false)
  const [writingOpen, setWritingOpen] = useState(false)

  const image = getImage(data.allContentfulBook.edges[0].node.thumbnail)

  useEffect(() => {
    // gsap.set(".preview__item-content", { opacity: 0 })
  })

  // const title = e.target.dataset.title

  const handleGridItem = e => {
    console.log(e.target)
  }

  const handleClick = e => {
    console.log("?")
    e.preventDefault()
    setContentOpen(true)
    gsap
      .timeline()
      .addLabel("start", 0)
      .to(".preview", {
        opacity: 1,
      })
      .to(".grid-item", {
        opacity: 0,
      })
  }

  const handleBackButton = e => {
    gsap
      .timeline()
      .to(".preview", {
        opacity: 0,
      })
      .to(".grid-item", {
        opacity: 1,
      })
  }

  const handleCloseButton = e => {
    setWritingOpen(false)
  }

  const handleClickSubject = () => {
    setWritingOpen(true)
    gsap.timeline().to(".grid", {
      opacity: 0,
    })
  }

  return (
    <Layout>
      <Seo title="Home" />

      <div className="main-content">
        {writingOpen ? (
          <Writing handleCloseButton={handleCloseButton} />
        ) : (
          <div className="center-container">
            <div
              style={{ zIndex: "999" }}
              className="subjects-menu"
              onClick={handleClickSubject}
            >
              Writing
            </div>
            <div className="content">
              Welcome! This is your progress report for the April to May
            </div>
          </div>
        )}
        <div className="grid">
          <div className="menu name">
            <div className="first-name">John</div>
            <div className="last-name">Smith</div>
          </div>
          {data.allContentfulBook.edges.map((grid, index) => (
            <Grid
              index={index}
              title={grid.node.title}
              imageUrl={grid.node.thumbnail.file.url}
              image={grid.node.thumbnail}
              handleGridItem={handleGridItem}
              handleClick={handleClick}
              data-title="Evenner"
            />
          ))}
          <a
            href="#"
            className="grid-item pos-1"
            style={{ display: "grid" }}
          ></a>
        </div>
        <div className="preview">
          <div className="preview__item" id="preview-1">
            <button
              className="preview__item-back unbutton"
              onClick={handleBackButton}
            >
              <span>Back</span>
            </button>
            <div className="preview__item-imgwrap">
              <GatsbyImage image={image} alt="a" />
              image
            </div>
            <h2 data-splitting class="preview__item-title">
              Mohanneles
            </h2>
            <div className="preview__item-content">
              <div className="preview__item-meta">
                <span>Acapulco, Mexico</span>
                <span>15/05/2025</span>
              </div>
              <p className="preview__item-description">
                Had a barney with the inlaws a bit miffed pigeons in Trafalgar
                Square nigh on't goggle box chav hard cheese old boy, marvelous
                Moriarty pulled a right corker squiffy fork out, a tad
                stupendous chaps doing my head in ee bah gum.
              </p>
              <button className="preview__item-info unbutton">+ Info</button>
              <button className="preview__item-button">Buy Tickets</button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </Layout>
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
        className={`grid-item pos-${index}`}
        ref={grid}
        style={{ display: "grid" }}
        data-title="Evenner"
        onMouseOver={handleGridItem}
        onClick={handleClick}
        data-title="Evenner"
      >
        <div>{title}</div>
        <GatsbyImage image={image1} alt={title} />
      </a>
    </>
  )
}

export default IndexPage

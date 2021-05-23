import React, { useEffect, useState, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
            }
          }
        }
      }
    }
  `)

  const [contentOpen, setContentOpen] = useState(false)

  const image = getImage(data.allContentfulBook.edges[0].node.thumbnail)
  const image2 = getImage(data.allContentfulBook.edges[1].node.thumbnail)
  const image3 = getImage(data.allContentfulBook.edges[2].node.thumbnail)
  const image4 = getImage(data.allContentfulBook.edges[3].node.thumbnail)

  useEffect(() => {
    // gsap.set(".preview__item-content", { opacity: 0 })
  })

  // const title = e.target.dataset.title

  const handleGridItem = e => {
    console.log(e.target)
  }

  const handleClick = e => {
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

  return (
    <Layout>
      <Seo title="Home" />
      <div className="menu">
        <h2>Reading</h2>
        <h2>Writing</h2>
        <h2>Vocabulary</h2>
      </div>

      <div className="main-content">
        <div className="grid">
          <a href="#" className="grid-item pos-1" style={{ display: "grid" }}>
            <StaticImage
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
              }}
              width={300}
              // You can optionally force an aspect ratio for the generated image
              aspectRatio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
              src={"../images/books/1.jpg"}
              formats={["auto", "webp", "avif"]}
            />
            <div
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
              }}
            >
              <h1>Hero text</h1>
            </div>
          </a>
          <a
            href=""
            className="grid-item pos-2"
            data-title="Evenner"
            onMouseOver={handleGridItem}
            onClick={handleClick}
          >
            <GatsbyImage image={image} alt="a" />
          </a>
          <a href="" className="grid-item pos-3">
            <GatsbyImage image={image2} alt="a" />
          </a>
          <a href="" className="grid-item pos-4">
            <GatsbyImage image={image3} alt="a" />
          </a>
          <a href="" className="grid-item pos-5">
            <GatsbyImage image={image4} alt="a" />
          </a>
        </div>
        <div class="preview">
          <div class="preview__item" id="preview-1">
            <button
              className="preview__item-back unbutton"
              onClick={handleBackButton}
            >
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <GatsbyImage image={image} alt="a" />
              image
            </div>
            <h2 data-splitting class="preview__item-title">
              Mohanneles
            </h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Acapulco, Mexico</span>
                <span>15/05/2025</span>
              </div>
              <p class="preview__item-description">
                Had a barney with the inlaws a bit miffed pigeons in Trafalgar
                Square nigh on't goggle box chav hard cheese old boy, marvelous
                Moriarty pulled a right corker squiffy fork out, a tad
                stupendous chaps doing my head in ee bah gum.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
        </div>

        <div>
          {data.allContentfulBook.edges.map((grid, index) => (
            <Grid title={grid.node.title} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const Grid = ({ title, video }) => {
  const grid = useRef()
  const [hoverState, setHoverState] = useState(false)

  return (
    <>
      <div className="asf" ref={grid}>
        <h3>{title}</h3>
      </div>
    </>
  )
}

export default IndexPage

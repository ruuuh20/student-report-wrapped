import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Writing from "../components/writing"
import Reading from "../components/reading"

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
  // const [writingOpen, setWritingOpen] = useState(false)
  const [subjectOpen, setSubjectOpen] = useState("home")

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
    setSubjectOpen("home")
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
    setSubjectOpen("home")
    gsap.timeline().to(".grid", {
      opacity: 1,
    })
    // setWritingOpen(false)
  }

  const handleClickSubject = e => {
    console.log(e.currentTarget)
    let subject = e.currentTarget.dataset.subject

    setSubjectOpen(subject)

    // setWritingOpen(true)

    gsap.timeline().to(".grid", {
      opacity: 0,
    })
  }

  let subj
  if (subjectOpen === "writing") {
    subj = <Writing handleCloseButton={handleCloseButton} />
  } else if (subjectOpen === "reading") {
    subj = <Reading handleCloseButton={handleCloseButton} />
  } else {
    subj = (
      <div className="center-container">
        <div className="sidebar">
          <ul>
            <li>
              <span className="one">John Smith</span>
            </li>
            <li>
              <span className="two">English 6</span>
            </li>
            <li>
              <span className="three">Paul L</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <span className="intro">
            Hi John, welcome to your{" "}
            <span className="accent">Student Report Wrapped</span>
          </span>
          <br />
          <span style={{ paddingLeft: "5vw" }}>Choose a subject:</span>
          <nav class="menu">
            <div
              class="menu__item"
              data-subject="reading"
              onClick={handleClickSubject}
            >
              <div class="menu__item-link">Reading</div>

              <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Reading</span>
                  <span>Reading</span>
                  <span>Reading</span>
                  <span>Reading</span>
                </div>
              </div>
            </div>
            <div
              class="menu__item"
              data-subject="writing"
              onClick={handleClickSubject}
            >
              <a class="menu__item-link">Writing</a>

              <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Writing</span>
                  <span>Writing</span>
                  <span>Writing</span>
                  <span>Writing</span>
                </div>
              </div>
            </div>
            <div class="menu__item">
              <a class="menu__item-link">Vocabulary</a>

              <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                </div>
              </div>
            </div>
            <div class="menu__item">
              <a class="menu__item-link">Best Essays</a>

              <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Best Essays</span>
                  <span>Best Essays</span>
                  <span>Best Essays</span>
                  <span>Best Essays</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div className="main-content">
        {subj && subj}
        {/* {writingOpen ? (
          <Writing handleCloseButton={handleCloseButton} />
        ) : (
          <div className="center-container">
            <div
              style={{ zIndex: "999" }}
              className="subjects-menu"
              data-subject="writing"
              onClick={handleClickSubject}
            >
              Writing
            </div>
            <div
              style={{ zIndex: "999" }}
              className="subjects-menu"
              onClick={handleClickSubject}
            >
              Reading
            </div>
            <div className="content">
              Welcome! This is your progress report for the April to May
            </div>
          </div>
        )} */}

        {/* <div className="grid">
          <div className="menu student-name">
            <div className="first-name">John</div>
            <div className="last-name">Smith</div>
          </div>
          <div className="menu name">
            <div className="last-name">English 7</div>
            <div className="first-name">Instructor: Paul L</div>
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
        </div> */}
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

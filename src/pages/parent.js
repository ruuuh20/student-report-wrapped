import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Writing from "../components/writing"
import Reading from "../components/reading"
import Vocabulary from "../components/vocabulary"

import { gsap } from "gsap"
import BestOf from "../components/bestOf"

const ParentPage
 = () => {
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

   const showMenuItems=() => {
        gsap.timeline()
        .set('.menu__item a', {x: '20%', opacity: 0})
        .to('.menu__item a', {
            duration: 1,
            ease: 'power3',
            x: '0%',
            stagger: 0.05
        })
        .to('.menu__item a', {
            duration: 0.4,
            ease: 'power1',
            opacity: 1,
            stagger: 0.05
        }, 0);
    }

  const [contentOpen, setContentOpen] = useState(false)
  // const [writingOpen, setWritingOpen] = useState(false)
  const [subjectOpen, setSubjectOpen] = useState("home")
  const [loading, setLoading] = useState(true)

  const image = getImage(data.allContentfulBook.edges[0].node.thumbnail)

  useEffect(() => {
    // gsap.set(".preview__item-content", { opacity: 0 })
            const menuItems = [];
        // initialize the MenuItems

        
        // show the menu items (initial animation where each menu item gets revealed)
        showMenuItems();


  })

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

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
    subj = <Reading handleCloseButton={handleCloseButton} user={'parent'} />
  } else if (subjectOpen === 'vocabulary') {
    subj = <Vocabulary handleCloseButton={handleCloseButton}/>
  } else if (subjectOpen === "best") {
    subj = <BestOf handleCloseButton={handleCloseButton} />
  }
  
  else {
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
            John's
            <span className="accent">Student Report Wrapped</span>
          </span>
          <nav className="menu">
            <div
              className="menu__item"
              data-subject="reading"
              onClick={handleClickSubject}
            >
              <div className="menu__item-link">Reading</div>
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Reading</span>
                  <span>Reading</span>
                  <span>Reading</span>
                  <span>Reading</span>
                </div>
              </div>
            </div>
            <div
              className="menu__item"
              data-subject="writing"
              onClick={handleClickSubject}
            >
              <div className="menu__item-link">Writing</div>

              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Writing</span>
                  <span>Writing</span>
                  <span>Writing</span>
                  <span>Writing</span>
                </div>
              </div>
            </div>
            <div className="menu__item" data-subject="vocabulary"
              onClick={handleClickSubject}>
              
              <div className="menu__item-link">Vocabulary</div>

              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                  <span>Vocabulary</span>
                </div>
              </div>
            </div>
            <div className="menu__item" data-subject="best"
              onClick={handleClickSubject}>
              <div className="menu__item-link">Best Essays</div>

              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
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
 <>
    <Layout user={'parent'}>
      <Seo title="Home" />
      <div className="main-content">
        {subj && subj}
       
      </div>
    </Layout>
    </>
  
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

export default ParentPage


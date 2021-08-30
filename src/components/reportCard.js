import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState, useRef } from "react"
import ReadingTab from "./readingTab"
import VocabTab from "./vocabTab"
import WritingTab from "./writingTab"

const ReportCard = () => {
  const writingData = useStaticQuery(graphql`
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

  const [subjectOpen, setSubjectOpen] = useState("reading")
  const [activeClass, setClass] = useState("reading")

  let subj
  if (subjectOpen === "writing") {
    subj = <WritingTab writingData={writingData} />
  } else if (subjectOpen === "reading") {
    subj = <ReadingTab />
  } else if (subjectOpen === "vocabulary") {
    subj = <VocabTab />
  } else if (subjectOpen === "best") {
    subj = "best"
  }

  const handleClickSubject = e => {
    let subject = e.currentTarget.dataset.subject
    setSubjectOpen(subject)
    setClass(subject)

    //  gsap.timeline().to(".grid", {
    //    opacity: 0,
    //  })
  }

  return (
    <div className="report-card-background">
      <section className="rc-intro-wrapper">
        <div className="rc-intro-top">
          <div className="flex">
            <div className="intro-content">
              <div>
                <span className="name-lg">John Smith</span>
              </div>
            </div>
            <div className="intro-content">
              <div>Class: English 6</div>
              <div>Teacher: Jane Joe</div>
            </div>
          </div>
        </div>
        <div className="rc-intro-bottom">
          <div className="rc-intro-text">
            <p>
              This class aims to help students grow in their English abilities
              by focusing on 3 areas: how to analyze good books, how to write
              great essays, and how to use new vocabulary words.
            </p>
          </div>
        </div>
      </section>
      <nav class="main-navigation">
        <div class="menu-live-navigation-container">
          <ul id="primary-menu" className="subjects-menu">
            <li
             
              className={activeClass === "reading" ? "active" : ""}
              data-subject="reading"
              onClick={handleClickSubject}
            >
              <span>Reading</span>
            </li>
            <li
              
              className={activeClass === "writing" ? "active" : ""}
              data-subject="writing"
              onClick={handleClickSubject}
            >
              <span>Writing</span>
            </li>
            <li
              onClick={handleClickSubject}
               className={activeClass === "vocabulary" ? "active" : ""}
              data-subject="vocabulary"
            >
              <span>Vocab</span>
            </li>
          </ul>
        </div>{" "}
      </nav>
      <div className="rc-main">{subj && subj}</div>
      <div className="cta-details">
        <div className="row">
          <Link to="/">View more details about your child's report card</Link>
        </div>
      </div>
     
      <hr />
      <div className="grid-6">
        <div className="header-1">Previous reports</div>
        <div className="card-grid-item-1">
          <span>Jan '21</span>
        </div>
        <div className="card-grid-item-1">
          <span>Fall '20</span>
        </div>
        <div className="card-grid-item-1">
          <span to="#">Summer '20</span>
        </div>
        <div className="card-grid-item-1">
          <span>-</span>
        </div>

        <div className="header-2">Course</div>
        <div className="card-grid-item-2">
          <Link to="#">Eng 6</Link>
        </div>
        <div className="card-grid-item-2">
          <Link to="#">Eng 5</Link>
        </div>
        <div className="card-grid-item-2">
          <Link to="#">Eng 5</Link>
        </div>
        <div className="card-grid-item-2">
          <span>-</span>
        </div>
      </div>
    </div>
  )
}

export default ReportCard

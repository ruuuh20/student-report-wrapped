import React from "react"
import ReadingTab from "./readingTab"

const ReportCard = () => {
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
              <div>English 6</div>
              <div>Teacher: Jane Joe</div>
            </div>
          </div>
        </div>
        <div className="rc-intro-bottom">
          <div className="rc-intro-text">
            <p>
              This class aims to help students grow in their English abilities
              by focusing on things: how to analyze good books, how to write
              great essays, and how to use new vocabulary words.
            </p>
          </div>
        </div>
      </section>
      <div>
        <nav class="main-navigation">
          <div class="menu-live-navigation-container">
            <ul id="primary-menu" className="subjects-menu">
              <li
                id="menu-item-626"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-626"
              >
                <a href="https://thefour.live/schedule/">Reading</a>
              </li>
              <li
                id="menu-item-551"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-551"
              >
                <a href="https://thefour.live/briefs/">Writing</a>
              </li>
              <li
                id="menu-item-552"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-552"
              >
                <a href="https://thefour.live/about/">Vocab</a>
              </li>
            </ul>
          </div>{" "}
        </nav>
      </div>

      <ReadingTab />

      <div className="grid-6">
        <div className="header-1">most popular</div>
        <div className="card-grid-item-1">
          <p>hello</p>
        </div>
        <div className="card-grid-item-1">
          <p>hello</p>
        </div>
        <div className="card-grid-item-1">
          <p>hello</p>
        </div>
        <div className="card-grid-item-1">
          <p>hello</p>
        </div>
        <div className="card-grid-item-1">
          <p>hello</p>
        </div>
        <div className="header-2">writers</div>
        <div className="card-grid-item-2">
          <p>hello</p>
        </div>
        <div className="card-grid-item-2">
          <p>hello</p>
        </div>
        <div className="card-grid-item-2">
          <p>hello</p>
        </div>
        <div className="card-grid-item-2">
          <p>hello</p>
        </div>
        <div className="card-grid-item-2">
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default ReportCard

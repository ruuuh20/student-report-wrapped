import React from "react"

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame__title-wrap">
        <a href="/" className="frame__title">
          PEAK
        </a>
      </div>
      <div className="frame__links">
        <span>Spring 2021</span>
        <span>Eng 6</span>
        <span>John Smith</span>
      </div>
      <div className="frame__user">
        <span>Student</span>
      </div>
      {/* <div className="frame__demos">
        <small>Updated: May 2021</small>
      </div> */}
    </div>
  )
}

export default Frame

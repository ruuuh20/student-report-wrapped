import React from "react"
import { Link } from 'gatsby'
import userIcon from "../images/user.png"

const Frame = ({ user = 'student' }) => {
  return (
    <div className="frame">
      <div className="frame__title-wrap">
        <Link to="/" className="logo-title">
          PEAK
        </Link>
      </div>
      <div className="frame__links">
        <span>John Smith</span>
        <span>Spr 2021</span>
        <span>ENG 6 </span>
        <span id="label-2">[distance learning]</span>
        
      </div>
      <div className="frame__user">
        <span>    <img className="user-img" src={userIcon} /></span>
        <Link to={`/${user}`}>{user}</Link>
      </div>
      {/* <div className="frame__demos">
        <small>Updated: May 2021</small>
      </div> */}
    </div>
  )
}

export default Frame

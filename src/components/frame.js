import React from "react"
import { Link } from 'gatsby'
import userIcon from "../images/user.png"

const Frame = ({  user = 'parent', url }) => {
   
  return (
    <div className="frame">
      {/* <div className="frame__title-wrap">
        <Link to="/" className="logo-title">
          PEAK
        </Link>
      </div> */}
      <div className="frame__links">
        <span>John Smith</span>
        <span>Spr 21</span>
        <span>ENG 6 </span>
{ url === '/card' ?  '' : (<span>
          <Link className="four back-to-card" to="/card">
              Go to report card
             </Link>
        </span>) 
}
       
      </div>
        
      <div className="frame__user">
        <span>    <img className="user-img" src={userIcon} /></span>
        <Link to={`/${user}`}>{user}</Link>
      </div>
     
    </div>
  )
}

export default Frame

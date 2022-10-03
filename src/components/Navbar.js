import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Contact</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutTexts}</Link> 
        {/* so in above made the a to Link and href into to , so Link is imported as well by clicking on snippet and also in to we are giving the react router dom route that is the url which needs to be rendered after clicking on this button that is aboutTextUtils so cross check the react router dom url under switch and in that url the About component is being rendered hence this way without manually we are rendering the component by clicking on the buttons and changing the componentt without loading the entire webpage using react router as used */}
      </li>
    </ul>
     <div className='d-flex'/>
<div className='bg-primary rounded mx-2'onClick={()=>{props.toggleMode('primary')}} style={{height : '30px', width : '30px' , cursor: 'pointer'}}/>
{/* note in above we have made a button of primary type that is blue with rounded mx-2 which is a bootstrap class and in onClick we are invoking the toggleMode function by passing "primary" as a value and so in toggleMode we have inroduced the parameter which will take this value primary and so now see the fucntion, also in onclickit only takes a function and not a function call hence here we have made this call a function itself by introducing fat arrow function as done , alomg woth style specification of the button and so we make this for all the color buttons that is danger warning success */}
<div className='bg-danger rounded mx-2'onClick={()=>{props.toggleMode('danger')}} style={{height : '30px', width : '30px' , cursor: 'pointer'}}/>
<div className='bg-success rounded mx-2'onClick={()=>{props.toggleMode('success')}} style={{height : '30px', width : '30px' , cursor: 'pointer'}}/>
<div className='bg-warning rounded mx-2'onClick={()=>{props.toggleMode('warning')}} style={{height : '30px', width : '30px' , cursor: 'pointer'}}/>
{/* so from above the respective buttons are made and so now we want that the backgroundColor changes acc to the color of button that is different modes so for that we have passed the value by calling function toggleMode and so under function toggleMode : */}



    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
</div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
title: PropTypes.string.isRequired, //telling that the title of Navbar component has to be a string so if in variable , its assigned a number say then console shows error
aboutTexts: PropTypes.string.isRequired
}

Navbar.defaultProps= {
title: "set props now",
aboutTexts: "set about now"
}
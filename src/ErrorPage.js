import React from 'react'
import './ErrorPage.css'
import {NavLink} from "react-router-dom";

// import {button} from "react-bootstrap-dom"

function ErrorPage() {
  return (
    <div className='errorpage'>

            <h1>Oh no!!</h1>
            <p class="subtitle">
	            You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div align="center">
                {/* <button class="btn-back" href="#">Back to previous page</button> */}
                <NavLink to="/">Back to Home page</NavLink>
            </div>
        </div>
  )
}

export default ErrorPage
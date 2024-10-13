import React from 'react'

const TopBar = () => {
  return (
    <div className="nav-scroller bg-body shadow-sm">
    <nav className="nav nav-underline" aria-label="Secondary navigation">
      <a className="nav-link active" aria-current="page" href="#">
        Dashboard
      </a>
      <a className="nav-link" href="#">
        Friends
        <span className="badge bg-light text-dark rounded-pill align-text-bottom">
          27
        </span>
      </a>
      <a className="nav-link" href="#">
        Explore
      </a>
      <a className="nav-link" href="#">
        Suggestions
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
    </nav>
  </div>
  
  )
}

export default TopBar
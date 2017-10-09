import React from 'react'
import {Link} from '../router/Link'

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/complete">Complete</Link>
    </div>
  )
}

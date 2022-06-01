import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import withRouter from '../hoc/withRouter'
// import { withParams } from '../hoc/hocs'
// import { withNavigation } from '../hoc/hocs'

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.navigate('/about')
  // }, 3000)

  return (
    <React.Fragment>
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Bloggles</Link>
        <Link to='/' data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        <ul className='right hide-on-med-and-down'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="slide-out">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/todos">Todos</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    </React.Fragment>
  )
}

// export default withNavigation(Navbar)
// export default withParams(Navbar)
// export default withRouter(Navbar)
export default Navbar
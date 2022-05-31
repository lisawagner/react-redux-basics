import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function withRouter(Component) {
  return (props) => {
    const location = useLocation()
    const history = useNavigate()
    const params = useParams()
    return <Component {...props} history={history} location={location} params={params} />
  }
}

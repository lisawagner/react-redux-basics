import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

export function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export function withLocation(Component) {
  return props => <Component {...props} location={useLocation()} />;
}

// HOCs = Higher Order Components.
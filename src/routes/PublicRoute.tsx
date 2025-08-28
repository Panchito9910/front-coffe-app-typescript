import { type ReactNode } from 'react'
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router'

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const {isAuth} = useAuth()
  return !isAuth ? children : <Navigate to={'/dashboard'} />
}

export default PublicRoute
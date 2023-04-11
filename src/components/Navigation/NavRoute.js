import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.css';



export default function RouteBar() {
  return (
    <div className="routeTab">
      <ul>
        <CustomLink to="/statistics">Statistics</CustomLink>
        <CustomLink to="/overview" isActive="active">Overview</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/analytics">Analytics</CustomLink>
      </ul>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
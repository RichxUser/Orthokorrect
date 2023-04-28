import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light ">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Notre agence</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Service traduction</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Tarifs</Link>
                </li>
            </ul>
            <form class="form-inline">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        </nav>
    )
}

export default Nav
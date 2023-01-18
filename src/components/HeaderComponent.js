import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <ul className="ulHeader">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/chats">Chats</Link></li>
            </ul>
        </>
    )
}

export default Header;
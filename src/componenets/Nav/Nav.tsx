import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return <div>
        <nav className="navbar">
            <div className="logo">TOBI GROSSERY STORE</div>
            <ul className="nav-links">
                <div className="menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="services"><a href="/">Services</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
            </ul>
        </nav>
    </div>
}
export default Nav;
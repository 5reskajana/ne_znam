import {useState} from "react";
import {Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="nav">
            <div className="logo-container">
                <CustomLink to="/">
                    <div className={`logo ${menuOpen ? 'hide' : ''}`}>[FreeCV]</div>
                </CustomLink>
            </div>


            <div className={`nav-menu-container ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-menu">
                    <CustomLink to="/#features" activeOnRoot>
                        <HashLink smooth to="/#features" id="special">
                            Features
                        </HashLink>
                    </CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/login">
                        <button className="login">Log in</button>
                    </CustomLink>
                    <CustomLink to="/signup">
                        <button className="signup">Sign up</button>
                    </CustomLink>
                </ul>
            </div>
        </nav>
    );
}

function CustomLink({to, children, activeOnRoot, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive =
        useMatch({path: resolvedPath.pathname, end: true}) &&
        (!activeOnRoot || (activeOnRoot && resolvedPath.pathname === '/'));

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}



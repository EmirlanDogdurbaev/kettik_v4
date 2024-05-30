import {Link, useLocation} from "react-router-dom";
import cl from "./NavBar.module.scss";

const NavBar = () => {
    const location = useLocation();
    const pathArray = location.pathname.split("/");
    const id = pathArray.length >= 3 ? pathArray[2] : null;
    let navClass;

    if (id) {
        navClass = cl.NavDetail;
    } else if (location.pathname === "/profile" || location.pathname === "/create" ) {
        navClass = cl.NavDetail; // Используйте cl.NavDetail, если путь равен /profile
    } else {
        navClass = cl.Nav;
    }
    const role = localStorage.getItem('role');
    return (
        <nav className={navClass}>
            <section>
                <div>
                    <h2>KETTIK</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/tours">Tours</Link>
                    </li>
                    <li>
                        <Link to="/individual">Individual</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>

                    {role === "ADMIN" && (
                        <li>
                            <Link to="/create">Create Tour</Link>
                        </li>
                    )}
                </ul>
                <Link
                    to="/book"
                    className={cl.button}
                    style={{color: location.pathname === "/book" ? "green" : "black"}}
                >
                    Book
                </Link>
            </section>
        </nav>
    );
};

export default NavBar;
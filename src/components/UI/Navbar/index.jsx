import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { NavItem } from "../NavItem";
import './Navbar.css'

function NavBar() {
  const { openNavbar } = useContext(GlobalContext);

  return (
    <>
      {openNavbar && (
        <div className="navbar-overlay">
          <ul className="navbar-list">
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="/CVDante">CVDante</NavItem>
            </li>
            <li>
              <NavItem to="/BiographyDante">BiographyDante</NavItem>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export { NavBar };

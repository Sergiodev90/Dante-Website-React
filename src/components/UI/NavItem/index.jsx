import { NavLink } from "react-router-dom";



const NavItem = ({to,children}) =>{
    const activeStyle = {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      };
      
      const inactiveStyle = {
        textDecoration: 'none',
      };
      
      return (
        <NavLink
          to={to}
          style={({ isActive }) =>
            isActive ? activeStyle : inactiveStyle
          }
        >
          {children}
        </NavLink>
      );
      
}

export {NavItem}
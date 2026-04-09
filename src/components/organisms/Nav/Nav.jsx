import { NavLink } from "react-router-dom";
import mainLogo from "../../../shared/assets/images/fashion-logo.png";
import style from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={style.navBar}>
      <NavLink to="/">
        <img
          className={style.mainLogo}
          src={mainLogo}
          alt="Fashion Main Logo png"
        />
      </NavLink>

      <div className={style.listContainer}>
        <ul >
          <NavLink to="/products" className={style.navListItem}>
            <li >Products</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

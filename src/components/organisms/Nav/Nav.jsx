import { NavLink } from "react-router-dom";
import { useContext } from "react";
import mainLogo from "../../../shared/assets/images/fashion-logo.png";
import { IoMdCart } from "react-icons/io";
import { MyContext } from "../../../context/context";
import style from "./Nav.module.css";

export function Nav() {
  const totalCount = useContext(MyContext);

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
        <ul className={style.navList}>
          <li className={style.navListItem}>
            <NavLink to="/products" className={style.navListItem}>
              Products
            </NavLink>
          </li>

          <li className={style.navListItem}>
            <NavLink to="/cart">
              <IoMdCart className={style.cartIcon}/>
            </NavLink>
            <p className={totalCount.totalCount !== 0  ? style.cartCount : ""}>{totalCount.totalCount !== 0 ? totalCount.totalCount : ""}</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

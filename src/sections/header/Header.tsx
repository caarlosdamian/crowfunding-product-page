import logo from "../../images/logo.svg";
import bg from "../../images/image-hero-desktop.jpg";
import hamburger from "../../images/icon-hamburger.svg";
import hamburgerMobile from "../../images/image-hero-mobile.jpg";
import closeMenu from "../../images/icon-close-menu.svg";
import { navItems } from "../../utils/data";
import "./Header.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BoxMenu } from "../../components/boxMenu/BoxMenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/toggle/toggleSlice";

export const Header = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const { menuActive } = useSelector((state: any) => state.toggle);
  console.log(menuActive);
  return (
    <div className="header-container">
      <img
        src={width <= 375 ? hamburgerMobile : bg}
        alt="bg"
        className="img-back"
      />

      {menuActive && <BoxMenu />}
      <div className="header-left-content">
        <img src={logo} alt="logo" className="header-left-img" />
      </div>
      <div className="header-right-content">
        {width <= 375 ? (
          <img
            src={menuActive ? closeMenu : hamburger}
            alt="hamburger"
            className="header-right-img"
            onClick={() => dispatch(toggleMenu())}
          />
        ) : (
          navItems.map((item) => (
            <span className="navb-item" key={item.id}>
              {item.name}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

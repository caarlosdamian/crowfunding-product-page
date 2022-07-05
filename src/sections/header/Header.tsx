import logo from "../../images/logo.svg";
import bg from "../../images/image-hero-desktop.jpg";
import hamburger from "../../images/icon-hamburger.svg";
import hamburgerMobile from "../../images/image-hero-mobile.jpg";
import closeMenu from "../../images/icon-close-menu.svg";
import { navItems } from "../../utils/data";
import "./Header.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BoxMenu } from "../../components/boxMenu/BoxMenu";

interface HeaderProps {
  showMenu: boolean;
  setshowMenu: (showMenu: boolean) => void;
}

export const Header = ({ setshowMenu, showMenu }: HeaderProps) => {
  const { width } = useWindowSize();
  return (
    <div className="header-container">
      <img
        src={width <= 375 ? hamburgerMobile : bg}
        alt="bg"
        className="img-back"
      />

      {showMenu && <BoxMenu />}
      <div className="header-left-content">
        <img src={logo} alt="logo" className="header-left-img" />
      </div>
      <div
        className="header-right-content"
        
      >
        {width <= 375 ? (
          <img
            src={showMenu ? closeMenu : hamburger}
            alt="hamburger"
            className="header-right-img"
            onClick={() => setshowMenu(!showMenu)}
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

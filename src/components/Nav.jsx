import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    if (i18n.language == "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  };

  const toggleMenu = () => {
    document.querySelector(".mobile-menu").classList.toggle("opened");
  };

  return (
    <>
      <nav>
        <div
          className="logo"
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="/imgs/logo.png" alt="" />
          <h3>{t("title")}</h3>
        </div>
        <div className="links">
          <a className="active" href="#home">
            {t("home")}
          </a>
          <a href="#about">{t("about us")}</a>
          <a href="#activs">{t("activities title")}</a>
          <a href="#contact">{t("contact")}</a>
          <a className="lang-btn" onClick={switchLanguage}>
            {t("lang")}
          </a>
        </div>

        <FontAwesomeIcon
          className="menu-icon"
          icon={faBars}
          onClick={toggleMenu}
        />
        <div className="mobile-menu">
          <FontAwesomeIcon
            className="close-icon"
            icon={faXmark}
            onClick={toggleMenu}
          />
          <a className="active" href="#home" onClick={toggleMenu}>
            {t("home")}
          </a>
          <a href="#about" onClick={toggleMenu}>
            {t("about us")}
          </a>
          <a href="#activs" onClick={toggleMenu}>
            {t("activities title")}
          </a>
          <a href="#contact" onClick={toggleMenu}>
            {t("contact")}
          </a>
          <a
            className="lang-btn"
            onClick={() => {
              switchLanguage();
              toggleMenu();
            }}
          >
            {t("lang")}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;

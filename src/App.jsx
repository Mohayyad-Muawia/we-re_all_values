import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const lang = localStorage.getItem("i18nextLng");
  useEffect(() => {
    window.document.dir = i18n.dir();
    document.title = t("title");
  }, [lang]);
  const { t, i18n } = useTranslation();

  // update nav links on scroll
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(" .links a[href]");
    const mobileLinks = document.querySelectorAll(" .mobile-menu a[href]");

    function updateActiveLink(links) {
      let index = sections.length;

      while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

      links.forEach((link) => link.classList.remove("active"));
      links[index].classList.add("active");
    }

    window.addEventListener("scroll", () => {
      updateActiveLink(mobileLinks);
      updateActiveLink(navLinks);
    });
    console.log(mobileLinks);
  });

  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;

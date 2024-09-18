import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        &copy; {new Date().getFullYear()} {t("rights")}
      </footer>
    </>
  );
};

export default Footer;

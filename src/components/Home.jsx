import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faAt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Home = () => {
  const { t, i18n } = useTranslation();

  // scroll up
  useEffect(() => {
    const up = document.querySelector(".up");
    up.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });

    window.onscroll = function () {
      if (window.scrollY >= 400) {
        up.classList.add("visable");
      } else {
        up.classList.remove("visable");
      }
    };
  }, []);

  return (
    <>
      {/* waves animation */}
      <div id="home" class="home section">
        <div class="inner-header flex">
          <h1>
            {t("org")}
            <img src="/logo-white.png" width={"80px"} />
          </h1>
        </div>

        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      {/* waves animation end*/}

      <div className="container">
        <div className="main-title">
          <h1>{t("about us")}</h1>
        </div>

        <div className="who-are-we section" id="about">
          <div className="who sec">
            <img className="img-fluid" src="/imgs/who.jpg" alt="" />
            <div className="info">
              <h2 className="sub-title">{t("about us title")}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: t("who are we") + "." }}
              ></p>
            </div>
          </div>

          <div className="vision sec">
            <div className="info">
              <h2 className="sub-title">{t("our vision title")}</h2>
              <p>{t("our vision body")}.</p>
            </div>
            <img className="img-fluid" src="/imgs/vision.jpg" alt="" />
          </div>

          <div className="mision sec">
            <img className="img-fluid" src="/imgs/mision.jpg" alt="" />
            <div className="info">
              <h2 className="sub-title">{t("our mision title")}</h2>
              <p>{t("our mision body")}</p>
            </div>
          </div>

          <ul className="goals">
            <h2>{t("our goals title")}</h2>
            <h3 dangerouslySetInnerHTML={{ __html: t("our goals body") }}></h3>
            <li dangerouslySetInnerHTML={{ __html: t("goal 1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 2") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 3") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 4") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 5") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 6") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 7") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 8") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 9") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 10") }}></li>
            <li dangerouslySetInnerHTML={{ __html: t("goal 11") }}></li>
          </ul>

          <div className="structure">
            <h2>{t("org structure title")}</h2>
            <h4>{t("org structure body")}</h4>

            <div className="offices">
              <div className="offs" style={{ "--color": "#ff7f50" }}>
                <img className="img-fluid" src="/svgs/offs1.svg" alt="" />
                <h6>{t("office 1 title")}</h6>
                <p>{t("office 1 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#4169e1" }}>
                <img className="img-fluid" src="/svgs/offs2.svg" alt="" />
                <h6>{t("office 2 title")}</h6>
                <p>{t("office 2 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#8a2be2" }}>
                <img className="img-fluid" src="/svgs/offs3.svg" alt="" />
                <h6>{t("office 3 title")}</h6>
                <p>{t("office 3 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#ff1493" }}>
                <img className="img-fluid" src="/svgs/offs4.svg" alt="" />
                <h6>{t("office 4 title")}</h6>
                <p>{t("office 4 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#daa520" }}>
                <img className="img-fluid" src="/svgs/offs5.svg" alt="" />
                <h6>{t("office 5 title")}</h6>
                <p>{t("office 5 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#228b22" }}>
                <img className="img-fluid" src="/svgs/offs6.svg" alt="" />
                <h6>{t("office 6 title")}</h6>
                <p>{t("office 6 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#40e0d0" }}>
                <img className="img-fluid" src="/svgs/offs7.svg" alt="" />
                <h6>{t("office 7 title")}</h6>
                <p>{t("office 7 body")}</p>
              </div>

              <div className="offs" style={{ "--color": "#708090" }}>
                <img className="img-fluid" src="/svgs/offs8.svg" alt="" />
                <h6>{t("office 8 title")}</h6>
                <p>{t("office 8 body")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="activities section" id="activs">
          <div className="main-title">
            <h1>{t("activities title")}</h1>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("activities body") }}></p>

          <div className="imgs1">
            <img className="img-fluid" src="/imgs/act1.jpg" alt="" />
            <img className="img-fluid" src="/imgs/act2.jpg" alt="" />
            <img className="img-fluid" src="/imgs/act3.jpg" alt="" />
          </div>
          <div className="imgs2">
            <img className="img-fluid" src="/imgs/act4.jpg" alt="" />
            <img className="img-fluid" src="/imgs/act5.jpg" alt="" />
          </div>

          <div className="intitiats">
            <h2>{t("initiatives title")}</h2>

            <div className="init">
              <h5>{t("initiat 1 title")}</h5>
              <p>{t("initiat 1 body")}</p>
            </div>

            <div className="init">
              <h5>{t("initiat 2 title")}</h5>
              <p>{t("initiat 2 body")}</p>
            </div>

            <div className="init">
              <h5>{t("initiat 3 title")}</h5>
              <p>{t("initiat 3 body")}</p>
            </div>

            <div className="init">
              <h5>{t("initiat 4 title")}</h5>
              <p>{t("initiat 4 body")}</p>
            </div>

            <div className="init">
              <h5>{t("initiat 5 title")}</h5>
              <p>{t("initiat 5 body")}</p>
            </div>

            <div className="init">
              <h5>{t("initiat 6 title")}</h5>
              <p>{t("initiat 6 body")}.</p>
            </div>
          </div>
        </div>

        <h2 className="text-center fw-bold pt-5">{t("work")}</h2>
        <div className="our-work">
          <div className="work">
            <img className="img-fluid" src="/imgs/work1.jpg" alt="" />
            <h6>{t("work 1 title")}</h6>
            <p>{t("work 1 body")}.</p>
          </div>

          <div className="work">
            <img className="img-fluid" src="/imgs/work2.jpg" alt="" />
            <h6>{t("work 2 title")}</h6>
            <p>{t("work 2 body")}</p>
          </div>

          <div className="work">
            <img className="img-fluid" src="/imgs/work3.jpg" alt="" />
            <h6>{t("work 3 title")}</h6>
            <p>{t("work 3 body")}</p>
          </div>
        </div>

        <div className="contact section" id="contact">
          <div className="main-title">
            <h1>{t("contact")}</h1>
          </div>

          <h2>{t("acc")}</h2>

          <div className="accounts">
            <a
              href="https://www.facebook.com/we.are.all.valuse"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 1")}</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61558058574196 "
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 2")}</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61552521280103"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 3")}</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61565048684117"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 4")}</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100094890194815"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 5")}</span>
            </a>

            <a
              href="https://www.facebook.com/gwana.amal"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>{t("facebook 6")}</span>
            </a>
            <a
              href="https://whatsapp.com/channel/0029VakHqc80wajzFCx03k32 "
              target="_blanck"
              className="acc whats"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>{t("whatsapp")}</span>
            </a>

            <a
              href="https://t.me/weareallvaluesORG"
              target="_blanck"
              className="acc"
            >
              <FontAwesomeIcon icon={faTelegram} />
              <span>{t("telegram")}</span>
            </a>
          </div>

          <h2>{t("join title")}</h2>

          <p>{t("join body")}</p>

          <div className="join-links">
            <a href="mailto:contact@weareallvalues.org">
              <FontAwesomeIcon icon={faAt} />
              contact@weareallvalues.org
            </a>
            <a
              href="https://www.linkedin.com/in/we-are-all-values-organization-8287a1328"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Linked in
            </a>
            <a
              href="https://x.com/WaAV_org?t=aYzunGRHVe-1YfQkyD8hXQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />X - Twitter
            </a>
          </div>
        </div>
      </div>

      {/* scroll to top bottun */}
      <div className="up">
        <FontAwesomeIcon icon={faAnglesUp} />
      </div>
    </>
  );
};

export default Home;

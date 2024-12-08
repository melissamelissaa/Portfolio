import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="app">
      <h1 className="heading">
        <span className="char">H</span>
        <span className="char">i</span>
        <span className="char">,</span>
        <br />
        <span className="char">I</span>
        <span className="char">'</span>
        <span className="char">m</span>
        <span> </span>
        <span className="char">N</span>
        <span className="char">i</span>
        <span className="char">n</span>
        <span className="char">i</span>
        <span className="char">,</span>
        <br />
        <span className="char">W</span>
        <span className="char">e</span>
        <span className="char">b</span>
        <span> </span>
        <span className="char">A</span>
        <span className="char">n</span>
        <span className="char">d</span>
        <span> </span>
        <span className="char">M</span>
        <span className="char">o</span>
        <span className="char">b</span>
        <span className="char">i</span>
        <span className="char">l</span>
        <span className="char">e</span>
        <span> </span>
        <span className="char">D</span>
        <span className="char">e</span>
        <span className="char">v</span>
        <span className="char">e</span>
        <span className="char">l</span>
        <span className="char">o</span>
        <span className="char">p</span>
        <span className="char">e</span>
        <span className="char">r</span>
        <span className="char">.</span>
      </h1>
      <p className="aboutMe">
        I am a front-end developer with over two years of experience in mobile
        and web development. Beyond professional roles, I have enhanced my
        skills through advanced courses and private projects, which reflect my
        ability to solve real-world challenges. My expertise spans React.js,
        React Native, TypeScript, and modern design systems, allowing me to
        create intuitive and efficient applications. With a passion for
        innovation and continuous learning, I bring creativity and technical
        depth to every{" "}
        <a
          className="repoLink"
          href="https://github.com/melissamelissaa?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          projects
        </a>{" "}
        I undertake.{" "}
      </p>

      <div className="btnsContainer">
        <a
          href="https://drive.google.com/file/d/1BAfHwNkvuQYYjWkgb36Dzcp2k-VGlerc/view?usp=drive_link"
          target="_blank"
          className="btnLink"
          rel="noreferrer"
        >
          <button className="btn">
            <span className="iconForBtn">
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
            <p className="btnText">Resume</p>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/nini-chiaberashvili/"
          target="_blank"
          className="btnLink"
          rel="noreferrer"
        >
          <button className="btn">
            <span className="iconForBtn">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <p className="btnText">LinkedIn</p>
          </button>
        </a>

        <a
          href="https://github.com/melissamelissaa"
          target="_blank"
          className="btnLink"
          rel="noreferrer"
        >
          <button className="btn">
            <span className="iconForBtn">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <p className="btnText">GitHub</p>
          </button>
        </a>
      </div>

      <div className="containerOfIcons">
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/nini.chiaberashvili.5/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>

          <a
            target="_blank"
            href="https://github.com/melissamelissaa"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>

          <a
            target="_blank"
            href="https://t.me/NiniChiaberashvili2004"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/nini-chiaberashvili/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        <div className="emailPhoneDiv">
          <a
            target="_blank"
            href="tel:+995598-897-101"
            className="infoTxt"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faPhone} className="icon" />
            &nbsp; (+995) 598-897-101
          </a>
        </div>
        <a
          target="_blank"
          href="mailto: ninichiaberashvili2002@gmail.com"
          className="infoTxt"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          &nbsp; ninichiaberashvili2002@gmail.com
        </a>
      </div>
      <a
        href="https://github.com/melissamelissaa/Portfolio"
        id="link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="sourceDiv">
          <FontAwesomeIcon icon={faGithub} className="PortfolioGhIcon" />
          &nbsp; Source
        </div>
      </a>
    </div>
  );
}

export default App;

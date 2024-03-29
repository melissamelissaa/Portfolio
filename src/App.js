import "./App.css";
import pic from "./pic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { Tooltip } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="divOfpic">
        <img src={pic} className="picOfMe" />
      </div>

      <div className="divOfBody">
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
          I actively learn and practice on my own. I have done a few online
          courses and completed several{" "}
          <a
            className="repoLink"
            href="https://github.com/melissamelissaa?tab=repositories"
            target="_blank"
          >
            projects
          </a>{" "}
          where I have developed web applications from scratch. I am eager to
          learn more and expand my skillset as a Front-End Engineer every day.
        </p>

        <div className="btnsContainer">
          <a
            href="https://drive.google.com/file/d/1KGJ-iD_hkRmKi4h0kHFvlR6cVAAxgwhi/view?usp=sharing"
            target="_blank"
            className="btnLink"
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
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>

            <a target="_blank" href="https://github.com/melissamelissaa">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>

            <a target="_blank" href="https://t.me/NiniChiaberashvili2004">
              <FontAwesomeIcon icon={faTelegram} className="icon" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/nini-chiaberashvili/"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
          <div className="emailPhoneDiv">
            <a target="_blank" href="tel:+995598-897-101" className="infoTxt">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              &nbsp; (+995) 598-897-101
            </a>
          </div>
          <a
            target="_blank"
            href="mailto: ninichiaberashvili2002@gmail.com"
            className="infoTxt"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            &nbsp; ninichiaberashvili2002@gmail.com
          </a>
        </div>
        <a
          href="https://github.com/melissamelissaa/Portfolio"
          id="link"
          target="_blank"
        >
          <div className="sourceDiv">
            <FontAwesomeIcon icon={faGithub} className="PortfolioGhIcon" />
            &nbsp; Source
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;

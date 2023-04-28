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

function App() {
  return (
    <div className="App">
      <h1 className="heading">Hello, I'm Nini, Junior Front-end Engineer.</h1>
      <p className="aboutMe">
        I currently study at The University Of Georgia, Informatics faculty
        where I have gained knowledge in C++. Apart from the university, I
        actively learn and practice on my own. I have done a few online courses
        that helped me to learn HTML, CSS, JavaScript, React.js, etc. I have
        also completed several projects where I have developed web applications
        from scratch. I am eager to learn more and expand my skillset as a
        Front-End Engineer every day.
      </p>
      <button>
        <FontAwesomeIcon icon={faFilePdf} className="icon" />
        Resume
      </button>

      <button>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        LinkedIn
      </button>

      <button>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        GitHub
      </button>

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
        <a target="_blank" href="mailto: ninichiaberashvili2002@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
        <a target="_blank" href="tel:+995598-897-101">
          <FontAwesomeIcon icon={faPhone} className="icon" />
        </a>
      </div>
      <img src={pic} className="picOfMe"/>
    </div>
  );
}

export default App;

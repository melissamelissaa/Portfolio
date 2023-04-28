import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

const IconName = (props) => {
  return (
    <div>
      <p>props.id</p>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <h1 className="heading">Hello, I'm Nini, Junior Front-end Engineer.</h1>
      <p className="aboutMe"></p>
      <button>Resume</button>
      <button>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        LinkedIn
      </button>
      <button>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        GitHub
      </button>
      <div>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default App;

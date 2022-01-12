import { ImHtmlFive, ImCss3 } from "react-icons/im";
import {
  SiJavascript,
  SiReact,
  SiStyledComponents,
  SiFigma,
  SiVisualstudio,
  SiGatsby,
  SiPython,
} from "react-icons/si";
import { FaSass, FaNode } from "react-icons/fa";

import "../styles.css";

const Skills = () => {
  return (
    <div className="skillsOuterContainer">
      <h1 className="skillsTitle">Tech Stack</h1>
      <div className="stackIconsContainer">
        <div className="stackIconsContainer__skill">
          <ImHtmlFive className="skillIcon" />
          <p>HTML5</p>
        </div>
        <div className="stackIconsContainer__skill">
          <ImCss3 className="skillIcon" />
          <p>CSS3</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiJavascript className="skillIcon" />
          <p>JavaScript</p>
        </div>
        <div className="stackIconsContainer__skill">
          <FaSass className="skillIcon" />
          <p>Sass</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiReact className="skillIcon" />
          <p>React JS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiStyledComponents className="skillIcon" />
          <p>Styled Components</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiGatsby className="skillIcon" />
          <p>Gatsby JS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <FaNode className="skillIcon" />
          <p>Node JS</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiPython className="skillIcon" />
          <p>Python</p>
        </div>
        <div className="stackIconsContainer__skill">
          <SiVisualstudio className="skillIcon" />
          <p>VS Code</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

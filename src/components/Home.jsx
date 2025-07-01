import Navbar from "./Navbar";
import TextAndPhoto from "./TextAndPhoto";
import Skills from "./Skills";
import SocialMedia from './SocialMedia'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Navbar />
      <TextAndPhoto />
      <Skills />
      <SocialMedia />
    </div>
  );
}

export default Home;

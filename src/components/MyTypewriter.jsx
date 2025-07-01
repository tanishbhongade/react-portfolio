import { Typewriter } from "react-simple-typewriter";
import styles from "./MyTypewriter.module.css";

function MyTypewriter() {
  return (
    <div className={styles.typewriterContainer}>
      <div>
        <span className={styles.staticText}>Hi there! I am </span>
      </div>
      <div>
        <span className={styles.dynamicText}>
          <Typewriter
            words={[
              "Tanish Bhongade",
              "a Web Developer",
              "a Linux Enthusiast",
              "a speedcuber and a book reader",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
  );
}

export default MyTypewriter;

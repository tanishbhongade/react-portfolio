import styles from "./TextAndPhoto.module.css";
import MyTypewriter from "./MyTypewriter";
import MyPhoto from "./MyPhoto";

function TextAndPhoto() {
  return (
    <div className={styles.mainContainer}>
      <MyTypewriter />
      <MyPhoto />
    </div>
  );
}

export default TextAndPhoto;

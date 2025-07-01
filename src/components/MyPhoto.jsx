import styles from "./MyPhoto.module.css";

function MyPhoto() {
  return (
    <img
      src="/website-photo.jpg"
      alt="Not able to load the photo"
      className={styles.profilephoto}
    />
  );
}

export default MyPhoto;

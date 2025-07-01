import styles from "./ProjectTile.module.css";

function ProjectTile({ project }) {
  return (
    <div className={styles.projecttile}>
      <p className={styles.projectheading}>{project.name}</p>

      <div className={styles.githublinkcontainer}>
        <h3>
          <a href={project.link} className={styles.githublink}>
            GitHub/Article
          </a>
        </h3>
        <img
          src="/image.png"
          width={`20px`}
          onClick={() => window.open(project.link)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <p className={styles.shortDescription}>{project.shortDescription}</p>
    </div>
  );
}

export default ProjectTile;

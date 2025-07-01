import styles from "./ProjectSection.module.css";
import Masonry from "react-masonry-css";
import ProjectTile from "./ProjectTile";

const projects = [
  {
    name: "Rubik's Cube Scrambler",
    link: "https://github.com/tanishbhongade/Rubiks-Cube-Scrambler",
    shortDescription: "A scramble generator with integrated timer",
  },
  {
    name: "GlowFix",
    link: "https://github.com/tanishbhongade/GlowFix",
    shortDescription: "Backlight adjustment for X11 laptops",
  },
  {
    name: "Smart Crowd Monitoring and Choke Point Prevention System with Real-Time Density Visualization",
    link: "https://medium.com/@upanishadkachroo/smart-crowd-monitoring-and-choke-point-prevention-system-with-real-time-density-visualization-47a4e837e8b4",
    shortDescription: "A crowd monitoring system to assist authorities",
  },
];

function ProjectSection() {
  const breakpoints = {
    default: 3,
    768: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {projects.map((project, i) => (
        <div key={i} className={styles.box}>
          <ProjectTile project={project} />
        </div>
      ))}
    </Masonry>
  );
}

export default ProjectSection;

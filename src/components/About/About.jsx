import React from "react";
import styles from "./About.module.css";

// Direct imports of images
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import educationIcon from "../../assets/about/educationIcon.png"; // add this icon in your assets/about folder

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        {/* Main About Image */}
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        {/* About Details */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with hands-on experience in building
                responsive and optimized sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have hands-on experience in developing fast and optimized
                back-end systems and APIs.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have hands-on experience in designing clean and engaging
                landing pages.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <div className={styles.educationSection}>
        <h2 className={styles.subtitle}>Education</h2>
        <ul className={styles.educationList}>
          <li className={styles.educationItem}>
            <img src={educationIcon} alt="Education icon" />
            <div className={styles.educationText}>
              <h3>Bachelor of Engineering in Electronics and Communication (ECE)</h3>
              <p>Visvesvaraya Technological University (VTU), Haliyal, Uattara Kannada</p>
              <p>Graduated: 2024</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={educationIcon} alt="Course icon" />
            <div className={styles.educationText}>
              <h3>Java Full Stack Developer Course</h3>
              <p>At Besant Technogies, Jayanagar, Bangalore</p>
              <p>Focus: Java, Spring Boot, React.js, SQL, and Full Stack Projects</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

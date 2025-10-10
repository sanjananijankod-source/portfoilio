import React from "react";
import styles from "./Fresher.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

import c from "../../assets/skills/c.png";
import cpp from "../../assets/skills/cpp.png";
import css from "../../assets/skills/css.png";
import firebase from "../../assets/skills/firebase.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import python from "../../assets/skills/python.png";
import react from "../../assets/skills/react.png";
import springboot from "../../assets/skills/springboot.png";
import sql from "../../assets/skills/sql.png";

// Map skill names to images
const skillImages = {
  C: c,
  "C++": cpp,
  CSS: css,
  Firebase: firebase,
  HTML: html,
  Java: java,
  Python: python,
  React: react,
  SpringBoot: springboot,
  SQL: sql,
};

export const Fresher = () => {
  return (
    <section className={styles.container} id="fresher">
      <h2 className={styles.title}>Fresher</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skillImages[skill.title]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  {/* Only show role (Fresher) */}
                  <h3>{historyItem.role}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

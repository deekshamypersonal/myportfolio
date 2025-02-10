import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deeksha</h1>
        <p className={styles.description}>
          I am a full-stack Java developer with over five years of experience in
          designing and building scalable applications. After taking a 2.5-year
          career break for full-time parenting, I have remained actively engaged
          in personal projects to keep my technical skills sharp and stay up to
          date with industry trends.
        </p>
        <br></br>
        <p className={styles.description}>
          My expertise includes Java, Spring Boot, and Hibernate, along with
          front-end technologies like ReactJS, enabling seamless integration
          between the front and back end. I also have experience working with
          cloud technologies, including AWS, as well as containerization using
          Docker. Additionally, I have a strong understanding of microservices
          architecture, API development, and system design principles, allowing
          me to build efficient and maintainable applications.
        </p>
        <div className={styles.res}>
          <a
            href="https://docs.google.com/document/d/1_nq0BewYIa16hdXU7dMlu80KV8a7V0iN/edit"
            className={styles.contactBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

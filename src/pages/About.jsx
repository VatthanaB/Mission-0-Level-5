import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.main_div}>
      <h2>About Mission Ready HQ Extra Resources</h2>
      <p>
        Welcome to Mission Ready HQ Extra Resources, your gateway to continuous
        learning and growth. We are here to provide Mission Ready HQ students
        with supplementary materials, videos, and links to enhance your
        educational journey beyond the classroom.
      </p>
      <p>
        Mission Ready HQ is committed to equipping you with the skills you need
        to succeed in the tech industry. However, we understand that learning
        doesn't stop when the class ends. That's where we come in. Our platform
        offers a curated collection of resources to help you dive deeper into
        the world of technology, explore new topics, and stay up-to-date with
        the latest industry trends.
      </p>
      <p className={styles.underline}>What you'll find here:</p>
      <ul>
        <li>Video Tutorials</li>
        <li>Additional Reading Materials</li>
        <li>Links to Online Courses</li>
        <li>Interviews with Industry Experts</li>
        <li>Guidance on Personal Projects</li>
      </ul>
      <p>
        We believe that continuous learning is the key to your success, and
        Mission Ready HQ Extra Resources is your companion on that journey.
        We're here to support your growth and help you achieve your goals.
        Explore, learn, and thrive!
      </p>
    </div>
  );
}

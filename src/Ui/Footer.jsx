import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_contact}>
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@missionreadyhq.com">
              contact@missionreadyhq.com
            </a>
            <br />
            <strong>Phone:</strong> <a href="tel:0800005875">0800 005875</a>
            <br />
          </p>
        </div>
        <div className={styles.footer_logo}>
          <img
            src="https://www.missionreadyhq.com/wp-content/uploads/2020/04/cropped-MissionReadyLogo-e1586831826217.png"
            alt="Mission Ready HQ Logo"
          />
        </div>
      </div>

      <div className={styles.footer_copyright}>
        <p>
          &copy; {new Date().getFullYear()} Vatthana Boulom. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

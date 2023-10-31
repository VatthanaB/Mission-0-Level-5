import React from "react";
import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={styles.main_div}>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or need assistance, please feel
        free to reach out to us. We're here to help and support you in your
        learning journey.
      </p>
      <div>
        <div>
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@missionreadyhq.com">
              contact@missionreadyhq.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>
            <a href="tel:0800 005875">0800 005875</a>
          </p>
        </div>
        <div>
          <h3>Address</h3>
          <p>
            Level 5/115 Queen Street, Auckland CBD
            <br />
            Auckland 1010
            <br />
            New Zealand
          </p>
        </div>
      </div>
    </div>
  );
}

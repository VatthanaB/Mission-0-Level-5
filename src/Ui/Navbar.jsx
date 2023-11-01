import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import useScreenSize from "../hooks/useScreenSize";

export default function MainNavigation() {
  // create all my states to handle responsive design
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useScreenSize();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  // Update card properties based on screen size (responsive) using useScreenSize custom hook
  useEffect(() => {
    if (screenSize.width < 800) {
      setIsMobile(true);
      setScrollUp(false);
    } else {
      setIsMobile(false);
      setScrollUp(false);
    }
  }, [screenSize]);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setScrollUp(true);
    }
    if (!showMenu) {
      setShowMenu(true);
      setScrollUp(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* LEFT PART OF NAVBAR */}
      <div className={styles.left_div}>
        {" "}
        <Link to="/">
          <img
            src="https://www.missionreadyhq.com/wp-content/uploads/2020/04/cropped-MissionReadyLogo-e1586831826217.png"
            alt="logo"
          />
        </Link>
        <Link className={styles.links_brand} to="/">
          Learning Center
        </Link>
      </div>
      {/* RIGHT PART OF NAVBAR WITH LINKS  */}
      {/* REGULAR NAVBAR */}
      {!isMobile && (
        <ul className={styles.ul}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/"
            end
          >
            Homepage
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/login"
          >
            <button>Login</button>
          </NavLink>
        </ul>
      )}
      {/* NAVBAR WITH HAMBURGER MENU */}
      {isMobile && (
        <button onClick={toggleMenu} className={styles.hamburger_button}>
          <i class="fa-solid fa-bars"></i>
        </button>
      )}
      {isMobile && scrollUp && (
        <div className={styles.dropdown_container_off}>
          <ul className={styles.ul_mobile}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/"
              end
            >
              Homepage
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/contact"
            >
              Contact Us
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/login"
            >
              <button>Login</button>
            </NavLink>
          </ul>
        </div>
      )}
      {isMobile && showMenu && (
        <div className={styles.dropdown_container}>
          <ul className={styles.ul_mobile}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/"
              end
            >
              Homepage
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/contact"
            >
              Contact Us
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.links
              }
              to="/login"
            >
              <button>Login</button>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://github.com/lehahorban"
          rel="noreferrer"
          target="_blank"
        >
          Oleksii
        </a>
      </div>
      <div className={styles.socials}>
        <a href="http://instagram.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
            ></use>
          </svg>
        </a>
        <a href="http://facebook.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
            ></use>
          </svg>
        </a>
        <a href="http://youtube.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
            ></use>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Footer;

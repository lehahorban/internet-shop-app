import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../../styles/Sidebar.module.css";

function Sidebar() {
  const list = useSelector((state) => state.categories.list);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/term"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Condition
        </a>
      </div>
    </section>
  );
}

export default Sidebar;

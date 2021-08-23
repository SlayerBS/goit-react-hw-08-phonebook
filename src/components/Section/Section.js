import PropTypes from "prop-types";

import styles from "./Section.module.css";

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.title}> {title}</h2>
    <div className={styles.container}>{children} </div>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

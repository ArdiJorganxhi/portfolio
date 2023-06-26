import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
     
    </div>
  );
};

export default Tabsbar;

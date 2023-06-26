import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>EAT</h1>
          <h1>SLEEP</h1>
          <h1>CODE</h1>
          <h1>REPEAT.</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Ardi Jorganxhi</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <Link href="/github">
              <button className={styles.button}>View Projects</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

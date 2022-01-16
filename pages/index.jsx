import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I Design</h1>
          <h1>Data Platforms</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mehmet Yalçınkaya</h1>
            <h6 className={styles.bio}>Senior Data Engineer🧮, PhD🎓</h6>
            <br />
            <Link href="/projects">
              <button className={styles.button}>View Work 🏭</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me 📧</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
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

import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://ylcnky.com" target="_blank" rel="noopener">
          ylcnky.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:mehmet@ylcnky.com"
          target="_blank"
          rel="noopener"
        >
          mehmet@ylcnky.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/ylcnky" target="_blank" rel="noopener">
          ylcnky
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/mehmetylcnky/"
          target="_blank"
          rel="noopener"
        >
          mehmetylcnky
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/mehmet_ylcnky"
          target="_blank"
          rel="noopener"
        >
          mehmet_ylcnky
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;scholar:{' '}
        <a
          href="https://scholar.google.com/citations?user=0BWt0SAAAAAJ&hl=en"
          target="_blank"
          rel="noopener"
        >
          Mehmet Yalcinkaya
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;researchgate:{' '}
        <a
          href="https://www.researchgate.net/profile/Mehmet-Yalcinkaya"
          target="_blank"
          rel="noopener"
        >
          Mehmet Yalcinkaya
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/iamnitinr" target="_blank" rel="noopener">
          iamnitinr
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a href="https://codepen.io/itsnitinr" target="_blank" rel="noopener">
          nitinranganath
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/itsnitinr"
          target="_blank"
          rel="noopener"
        >
          itsnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

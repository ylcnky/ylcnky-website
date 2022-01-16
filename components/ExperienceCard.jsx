import Image from 'next/image';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <Image src={experience.image} height={"100%"} width={"100%"} objectFit="contain" overflow="hidden" alt={experience.name} priority/>
      <div className={styles.content}>
        <h3>{experience.name}</h3>
        <p>{experience.description}</p>
        <div className={styles.tags}>
          {experience.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {experience.source_code && (
            <a
              href={experience.source_code}
              target="_blank"
              rel="noopener"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={experience.demo}
            target="_blank"
            rel="noopener"
            className={styles.underline}
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

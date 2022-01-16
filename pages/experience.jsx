import ExperienceCard from '../components/ExperienceCard';
import { getExperience } from './api/experience';
import styles from '../styles/ExperiencePage.module.css';

const ProjectsPage = ({ experience }) => {
  return (
    <>
      <h2>Companies🏭 and Institutes🏫 which contributed my career</h2>
      <div className={styles.container}>
        {experience.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const experience = getExperience();

  return {
    props: { title: 'Experience', experience },
  };
}

export default ProjectsPage;

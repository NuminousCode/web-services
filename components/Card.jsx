import styles from '../styles/Card.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.containerCard}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

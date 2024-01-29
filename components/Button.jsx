import styles from '../styles/Button.module.css'
const Button = ({ label, onClick }) => {
  return (
    <button className = {styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

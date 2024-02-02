import Button from './Button'
import styles from '../styles/Header.module.css'


const Header = ({ handleOpen }) => {
  const labelContact = "Contact Me Now"

  return (
    <div className = {styles.containerMain}>
      <div className = {styles.title}> Magis <br className = {styles.break}/>Web Services</div>
      <div className = {styles.buttonWrapper}><Button className = {styles.button} label={labelContact} onClick={handleOpen}/></div>
    </div>
  )
}

export default Header

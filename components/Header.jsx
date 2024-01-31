import Button from './Button'
import styles from '../styles/Header.module.css'

const Header = () => {
  const labelContact = "Contact Me Now"
  return (
    <div className = {styles.containerMain}>
      <div className = {styles.title}> Magis Web Services</div>
      <div className = {styles.buttonWrapper}><Button className = {styles.button} label={labelContact}/></div>
    </div>
  )
}

export default Header

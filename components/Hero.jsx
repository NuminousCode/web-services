import styles from '../styles/Hero.module.css'
import Button from '../components/Button'

const Hero = (data) => {
    const headshotUrl = data.data[1]
    const labelContact = "Contact Me Now"
  return (
    <div className = {styles.containerHero}>
        <img src={headshotUrl} alt="image" className = {styles.headshot} />
            <div className = {styles.heroText}>
                <div className = {styles.name}>Hi, my name is Gerardo</div>
                <div className = {styles.slogan}>I build the web you need.</div>
            </div>
        <Button label={labelContact}/>
    </div>
  )
}

export default Hero

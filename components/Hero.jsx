import styles from '../styles/Hero.module.css'
import Button from '../components/Button'

const Hero = (data) => {
    const headshotUrl = data.data[1]
    const labelContact = "Contact Me Now"
  return (
    <div className = {styles.containerHero}>
      <div className = {styles.topWrapper}>
        <img src={headshotUrl} alt="image" className = {styles.headshot} />
            <div className = {styles.heroText}>
                <div className = {styles.name}>Hi, my name is Gerardo.</div>
                <div className = {styles.slogan}>I build the web you want.</div>
            </div>
      </div>
        <Button label={labelContact} className = {styles.button}/>
    </div>
  )
}

export default Hero

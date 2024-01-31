
import styles from  '../styles/Main.module.css'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Expertise from '../components/Expertise'
import Button from '../components/Button'

const Main = ({data, content}) => {
  const cardContent = content[0]
  const contentCard1 = cardContent.Card1
  const contentCard2 = cardContent.Card2
  const contentCard3 = cardContent.Card3

  const gradient1 = { 
    background: 'linear-gradient(135deg, hsla(195, 94%, 73%, 1) 0%, hsla(206, 76%, 13%, 1) 100%);'
  };const gradient2 = { 
    background: 'linear-gradient(45deg, hsla(195, 94%, 73%, 1) 0%, hsla(206, 76%, 13%, 1) 100%);'
  };

  const labelContact = "Contact Me Now"
  
  return (
    <div className = {styles.containerMain} >
      <Hero data={data}/>
      <div className = {styles.cards}>
        <h1 className = {styles.rate}>Select Your Rate</h1>
        <div className = {styles.cardsInner}>
        <h2 className = {styles.titleCard}>Hourly</h2>
        <Card data = {contentCard1} gradient = {gradient1}/>
        <h2 className = {styles.titleCard}>Daily</h2>
        <Card data = {contentCard2} gradient = {gradient2}/>
        <h2 className = {styles.titleCard}>Project</h2>
        <Card data = {contentCard3} gradient = {gradient1}/>
        </div>
        <Expertise />
        <Button label={labelContact} className={styles.button}/>
      </div>
    </div>
  )
}

export default Main

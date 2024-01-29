
import styles from  '../styles/Main.module.css'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Expertise from '../components/Expertise'

const Main = ({data, content}) => {
  const cardContent = content[0]
  const contentCard1 = cardContent.Card1
  const contentCard2 = cardContent.Card2
  const contentCard3 = cardContent.Card3
  
  return (
    <div className = {styles.containerMain} >
      <Hero data={data}/>
      <div className = {styles.cards}>
        <h1 className = {styles.rate}>Select Your Rate</h1>
        <h2 className = {styles.titleCard}>Hourly</h2>
        <Card data = {contentCard1}/>
        <h2 className = {styles.titleCard}>Daily</h2>
        <Card data = {contentCard2}/>
        <h2 className = {styles.titleCard}>Project</h2>
        <Card data = {contentCard3}/>
        <Expertise />
      </div>
      
    </div>
  )
}

export default Main

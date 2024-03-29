import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import fs from 'fs'
import path from 'path'
import Modal from '@mui/material/Modal';
import Form from '../components/Form'
import Head from 'next/head';

//Home page component
const Home = ({params}) => {
  //Extract content from params
  const cardContent = params.cardContent
  const imgUrls = params.imgUrls
  const vidUrl = params.imgUrls[0]

  // useState variable declarations
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Function declarations
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleFormSubmit = (submitted) => {
      setIsSubmitted(submitted);
      setTimeout(() => {
        setIsSubmitted(false); 
    }, 5000);
  };
  
  return (
    <div className = {styles.containerMain}>
       <Head>
        <title>Magis Web Services</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Discover top-notch web services with Magis Web Services. We specialize in creating custom websites, web applications, and providing SEO solutions to elevate your online presence. Contact us today to bring your digital vision to life." />
      </Head>
      <Modal open={open} onClose={handleClose}>
        <div className = {styles.modalContainer}  onClick={(e) => e.stopPropagation()}>
        <Form handleClose={handleClose} onFormSubmit={handleFormSubmit}/>
        </div>
      </Modal>
      {isSubmitted && 
        <div className={styles.confirmationMessage}>
            Thank you for your message! <br/>I'll contact you soon.
        </div>
      }
      <Header handleOpen={handleOpen} />
      <Main data = {imgUrls} content = {cardContent} handleOpen={handleOpen}/>
      <Footer />
      <video src={vidUrl} className = {styles.backgroundVideo} autoPlay muted loop/>
    </div>
  )
}

export async function getStaticProps(){

const imgFilePath = path.join(process.cwd(), 'data/cmsIds.json');
const cardsFilePath = path.join(process.cwd(), 'data/cards.json');
// Read and parse JSON files 
const imgFileContents = fs.readFileSync(imgFilePath, 'utf8');
const cardsFileContents = fs.readFileSync(cardsFilePath, 'utf8');
const imgIds = JSON.parse(imgFileContents);
const cardContent = JSON.parse(cardsFileContents);
const imgUrls = [];
// Retrieve access token and space ID from environment variables
const accessToken = process.env.ACCESS_TOKEN;
const spaceId = process.env.SPACE_ID;

// Iterate over image IDs, fetch each Contentful image URL, and add it to the imgUrls array
  for (const imgId of Object.values(imgIds[0])) {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`;
    
    try {
      // Fetch Contentful image data
      const response = await fetch(url);
      const result = await response.json();
       // Extract the image URL and add it to imgUrls array
      imgUrls.push(result.fields.file.url);
      // Error handling
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

   // Prepare the image URLs and cards content to be passed as props to the page component
  const params = {imgUrls, cardContent}

   // Return the image URLs as props
  return {
    props: {
      params
    },
  };
}

export default Home


import { useState, useEffect } from 'react';
import Button from './Button'
import styles from '../styles/Header.module.css'
import Modal from '@mui/material/Modal';
import Form from '../components/Form'

const Header = () => {
  const labelContact = "Contact Me Now"
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className = {styles.containerMain}>
      <Modal open={open} onClose={handleClose}>
        <Form />
      </Modal>
      <div className = {styles.title}> Magis <br className = {styles.break}/>Web Services</div>
      <div className = {styles.buttonWrapper}><Button className = {styles.button} label={labelContact} onClick={handleOpen}/></div>
    </div>
  )
}

export default Header

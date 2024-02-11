import { useState, useRef } from 'react';
import styles from '../styles/Form.module.css'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import emailjs from '@emailjs/browser';

function Form({ handleClose, onFormSubmit }) {
    //Reference declaration
    const form = useRef()

    //useState variable declaration
    const [emailError, setEmailError] = useState('');
    const [formErrors, setFormErrors] = useState('');

    //Regex declaration for email format test
    const emailRegex = /\S+@\S+\.\S+/;

    // Form data state variable declaration
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        company: '',
        contract: '',
        budget: '',
        description: '',
        startDate: null, 
        endDate: null   
    });

    //Custom input change function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            if (!emailRegex.test(value)) {
                setEmailError('Please enter a valid email address.');
            } else {
                setEmailError('');
            }
        }
        setFormData({ ...formData, [name]: value });
    };    

    const handleDateChange = (name, newValue) => {
        setFormData({
            ...formData,
            [name]: newValue  
        });
    };
  
    const US_STATES = [
        "Alabama", "Alaska", "Arizona", "Arkansas", 
        "California", "Colorado", "Connecticut", 
        "Delaware", "Florida", "Georgia", 
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
        "Kansas", "Kentucky", "Louisiana", 
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
        "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", 
        "Ohio", "Oklahoma", "Oregon", 
        "Pennsylvania", 
        "Rhode Island", 
        "South Carolina", "South Dakota", 
        "Tennessee", "Texas", 
        "Utah", 
        "Vermont", "Virginia", 
        "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    //Validates each input from form, sets message for error display or returns true for form submission
    const validateForm = () => {
        const { firstName, lastName, email, phone, city, state, budget, contract, description, startDate, endDate } = formData;
        let errors = [];
        if (!firstName) errors.push('First Name');
        if (!lastName) errors.push('Last Name');
        if (!email || emailError) errors.push('Email');
        if (!phone) errors.push('Phone');
        if (!city) errors.push('City');
        if (!state) errors.push('State');
        if (!budget) errors.push('Budget');
        if (!contract) errors.push('Contract Type');
        if (!description) errors.push('Project Description');
        if (!startDate) errors.push('Start Date');
        if (!endDate) errors.push('End Date');
        if (errors.length > 0) {
            setFormErrors(`Please fill the following fields: ${errors.join(', ')}.`);
            return false;
        }
        return true;
    };

    //Id and key declarations from dotenv
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    //Custom form submit function utilizing EmailJs
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
                await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                    .then((result) => {
                        console.log('Email sent:', result.text);
                        console.log('Form Data', formData);
                        setFormData({
                            firstName: '',
                            lastName: '',
                            company:'',
                            email: '',
                            phone: '',
                            city: '',
                            state: '',
                            contract: '',
                            budget: '',
                            description: '',
                            startDate: null, 
                            endDate: null   
                        });
                        onFormSubmit(true);
                        handleClose();
                    })
                    .catch((error) => {
                        console.error('Email sending error:', error.text);
                        onFormSubmit(false);
                    });
      
        } else {
            onFormSubmit(false);
        }
    };

    // Closes modal containing form on click outside form
    const handleCloseModal = (e) => {
        if (e.currentTarget === e.target) {
            handleClose(); 
        }
    };

    return (
    <div className = {styles.containerMain} onClick={handleCloseModal}>
       <form className = {styles.form} ref={form} onSubmit={handleSubmit}>
        <div className = {styles.formInner}  onClick={(e) => e.stopPropagation()}>
  
    <div className = {styles.containerCall}>
        <div className = {styles.title}>Call Or Text Now</div>
        <a href="tel:+14092929017" className = {styles.link}><div className = {styles.number}>409-292-9017</div></a>
    </div>
    <div className = {styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" className={styles.formControl} id="firstName" placeholder="Enter First Name" value={formData.firstName} name="firstName" onChange={handleInputChange}/>
    </div>
    <div className = {styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className={styles.formControl} id="lastName" placeholder="Last Name" value={formData.lastName} name="lastName" onChange={handleInputChange}/>
    </div>
    <div className = {styles.formGroup}>
        <label htmlFor="email">Email address</label>
        <input type="email" className={styles.formControl} id="email" placeholder="Enter email" value={formData.email} name="email" onChange={handleInputChange}/>
        <small id="emailHelp" className="form-text text-muted">Your email will never be shared with anyone else.</small>
    </div>
    <div className = {styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input type="text" className={styles.formControl} id="phone" placeholder="Phone" value={formData.phone} name="phone" onChange={handleInputChange}/>
    </div>
    <div className = {styles.formGroup}>
        <label htmlFor="city">City</label>
        <input type="text" className={styles.formControl} id="city" placeholder="City" value={formData.city} name="city" onChange={handleInputChange}/>
    </div>
  <div className={styles.formGroup}>
    <label htmlFor="stateSelect">State</label>
    <select className={styles.formControl} id="stateSelect" value={formData.state} onChange={handleInputChange} name="state">
    <option value="" disabled>Select State</option>
        {US_STATES.map(state => (
        <option key={state} value={state}>{state}</option>
        ))}
    </select>
   </div>
   <div className = {styles.formGroup}>
        <label htmlFor="company">Company</label>
        <input type="text" className={styles.formControl} id="company"  placeholder="Company" value={formData.company} name="company"onChange={handleInputChange}/>
        <small id="emailHelp" className="form-text text-muted">Optional</small>
    </div>
        <div className={styles.formGroup}>
            <label htmlFor="contractType1">Contract Type</label>
            <select className={styles.formControl} id="contractType1" value={formData.contract} onChange={handleInputChange} name="contract">
                <option value="" disabled>Select Contract Type</option>
                <option value="Hourly">Hourly</option>
                <option value="Day">Day</option>
                <option value="Project">Project</option>
            </select>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="contractType2">Budget</label>
        <select className={styles.formControl} id="contractType2" value={formData.budget} onChange={handleInputChange} name="budget">
            <option value="" disabled>Select Range</option>
            <option value="$0-$500">$0-$500</option>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$1000-$5000">$1000-$5000</option>
            <option value="$5000-$20000">$5000-$20000</option>
            <option value="$20000-$50000">$20000-$50000</option>
            <option value="$50000+">$50000+</option>
        </select>
        </div>

<div className = {styles.datePicker}>
  <LocalizationProvider dateAdapter={AdapterDayjs} className = {styles.datePicker}>
    <div className = {styles.dateTitle}>When do you need me to start?</div>
          <DatePicker
           value={formData.startDate}
           onChange={(newValue) => handleDateChange('startDate', newValue)}
            sx={{ width: 250, '& .MuiInputBase-input': {
                height: '10px', color: 'white', border: 'white solid 1px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' , width: '200px' 
            }, '& .MuiSvgIcon-root': {
                color: 'white', 
              },'& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },'&:hover fieldset': {
                    borderColor: 'white', 
                  },
                '&.Mui-focused fieldset': {
                  borderColor: '#4EDFEA', 
                },
                '@media (min-width: 750px)': { 
                    width: 300, 
                    '& .MuiInputBase-input': {
                        width: '250px' 
                    }
                }
              }}}
            slotProps={{
              field: { clearable: true },
            }}
          />
              <input
        type="hidden"
        name="startDate"
        value={formData.startDate ? formData.startDate.format('YYYY-MM-DD') : ''}
    />
    </LocalizationProvider>
    </div>
    <div className = {styles.datePicker}>
  <LocalizationProvider dateAdapter={AdapterDayjs} className = {styles.datePicker}>
    <div className = {styles.dateTitle}>When should the project be completed?</div>
          <DatePicker
           value={formData.endDate}
           onChange={(newValue) => handleDateChange('endDate', newValue)}
            sx={{ width: 250, '& .MuiInputBase-input': {
                height: '10px', color: 'white', border: 'white solid 1px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' , width: '200px'   
            }, '& .MuiSvgIcon-root': {
                color: 'white', 
              },'& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },'&:hover fieldset': {
                    borderColor: 'white', 
                  },
                '&.Mui-focused fieldset': {
                  borderColor: '#4EDFEA', 
                },
                '@media (min-width: 750px)': {
                    width: 300,
                    '& .MuiInputBase-input': {
                        width: '250px'
                    }
                }
              }}}
            slotProps={{
              field: { clearable: true },
            }}
          />
              <input
        type="hidden"
        name="endDate"
        value={formData.endDate ? formData.endDate.format('YYYY-MM-DD') : ''}
    />
    </LocalizationProvider>
    </div>
    <div class="form-group" className={styles.formGroup}>
    <label htmlFor="description">Describe The Project</label>
    <textarea class="form-control" id="description" rows="10" onChange={handleInputChange} value={formData.description} name="description"></textarea>
  </div>
  <button type="submit" className={`btn btn-primary ${styles.button}`}>Submit</button>
  {formErrors && <div className={styles.error}>{formErrors}</div>}
    </div>
  
</form>
    </div>
    );
}

export default Form;

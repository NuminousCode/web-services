
import { useState, useRef } from 'react';
import styles from '../styles/Form.module.css'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MyForm({ handleClose }) {
    const form = useRef()
    const [emailError, setEmailError] = useState('');
    const [formErrors, setFormErrors] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRegex = /\S+@\S+\.\S+/;
    // Form data state variable declaration

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company:'',
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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

    const validateForm = () => {
        const { firstName, lastName, email, phone, city, state, company, budget, contract, description } = formData;
        let errors = [];
        if (!firstName) errors.push('First Name');
        if (!lastName) errors.push('Last Name');
        if (!email || emailError) errors.push('Email');
        if (!phone) errors.push('Phone');
        if (!city) errors.push('City');
        if (!state) errors.push('State');
        if (!company) errors.push('Company');
        if (!budget) errors.push('Budget');
        if (!contract) errors.push('Contract');
        if (!description) errors.push('description');

        if (errors.length > 0) {
            setFormErrors(`Please fill the following fields: ${errors.join(', ')}.`);
            return false;
        }
        return true;
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey).then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            console.log('Form submitted:', formData);
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
            setIsSubmitted(true); 
                
            setTimeout(() => {
                setIsSubmitted(false); 
            }, 5000);

        } (error) => {
            console.log('Form submission error:', error.text);
        
            setSubmissionDescription('Failed to send the description. Please try again.');
        };
    };

    const handleCloseModal = (e) => {
        if (e.currentTarget === e.target) {
            handleClose(); 
        }
    };
    const [cleared, setCleared] = useState(false);

    return (
    <div className = {styles.containerMain} onClick={handleCloseModal}>
       <form className = {styles.form} ref={form} onSubmit={handleSubmit}>
        <div className = {styles.formInner} onClick={(e) => e.stopPropagation()}>
  <div className="form-group">
    <div className = {styles.containerCall}>
        <div className = {styles.title}>Call Or Text Now</div>
        <a href="tel:+14092929017" className = {styles.link}><div className = {styles.number}>409-292-9017</div></a>
    </div>
    <div className = {styles.formGroup}>
        <label for="firstName">First Name</label>
        <input type="email" className={styles.formControl} id="firstName"  placeholder="Enter First Name" value={formData.firstName} name="firstName"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="lastName">Last Name</label>
        <input type="text" className={styles.formControl} id="lastName"  placeholder="Last Name" value={formData.lastName} name="lastName"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="email">Email address</label>
        <input type="text" className={styles.formControl} id="email"  placeholder="Enter email" value={formData.email} name="email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className = {styles.formGroup}>
        <label for="phone">Phone</label>
        <input type="text" className={styles.formControl} id="phone"  placeholder="Phone" value={formData.phone} name="phone"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="city">City</label>
        <input type="text" className={styles.formControl} id="city"  placeholder="City" value={formData.city} name="city"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="company">Company</label>
        <input type="text" className={styles.formControl} id="company"  placeholder="Company" value={formData.company} name="company"/>
    </div>
  </div>
  <div>
  <div className={styles.formGroup}>
    <label htmlFor="stateSelect">State</label>
    <select className={styles.formControl} id="stateSelect" defaultValue="" value={formData.state} onChange={handleInputChange}>
    <option value="" disabled>Select State</option>
        {US_STATES.map(state => (
        <option key={state} value={state}>{state}</option>
        ))}
    </select>
   </div>
        <div className={styles.formGroup}>
            <label htmlFor="contractType">Contract Type</label>
            <select className={styles.formControl} id="contractType" defaultValue="" value={formData.contract} onChange={handleInputChange}>
                <option value="" disabled>Select Contract Type</option>
                <option value="Hourly">Hourly</option>
                <option value="Day">Day</option>
                <option value="Project">Project</option>
            </select>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="contractType">Budget</label>
        <select className={styles.formControl} id="contractType" defaultValue="" value={formData.budget} onChange={handleInputChange}>
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
    <div className = {styles.dateTitle}>When do you need me to start</div>
          <DatePicker
           value={formData.startDate}
           onChange={(newValue) => handleDateChange('startDate', newValue)}
            sx={{ width: 300, '& .MuiInputBase-input': {
                height: '10px', color: 'white', border: 'white solid 1px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'  
            }, '& .MuiSvgIcon-root': {
                color: 'white', 
              },'& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },'&:hover fieldset': {
                    borderColor: 'white', 
                  },
                '&.Mui-focused fieldset': {
                  borderColor: '#4EDFEA', // Border color when focused
                },
              }}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
    </LocalizationProvider>
    </div>
    <div className = {styles.datePicker}>
  <LocalizationProvider dateAdapter={AdapterDayjs} className = {styles.datePicker}>
    <div className = {styles.dateTitle}>When should the project be completed</div>
          <DatePicker
           value={formData.endDate}
           onChange={(newValue) => handleDateChange('endDate', newValue)}
            sx={{ width: 300, '& .MuiInputBase-input': {
                height: '10px', color: 'white', border: 'white solid 1px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'  
            }, '& .MuiSvgIcon-root': {
                color: 'white', 
              },'& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },'&:hover fieldset': {
                    borderColor: 'white', 
                  },
                '&.Mui-focused fieldset': {
                  borderColor: '#4EDFEA', // Border color when focused
                },
              }}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
    </LocalizationProvider>
    </div>
    </div>
    <div class="form-group" className={styles.formGroup}>
    <label for="exampleFormControlTextarea1">Describe The Project</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
  <button type="submit" className={`btn btn-primary ${styles.button}`}>Submit</button>
  </div>
</form>
    </div>
    );
}

export default MyForm;

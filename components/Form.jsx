
import { useState } from 'react';
import styles from '../styles/Form.module.css'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MyForm() {
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
    

    const [date, setDate] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
    <div className = {styles.containerMain}>
       <form className = {styles.form}>
        <div className = {styles.formInner}>
  <div className="form-group">
    <div className = {styles.containerCall}>
        <div className = {styles.title}>Call Or Text Now</div>
        <div className = {styles.number}>409-292-9017</div>
    </div>
    <div className = {styles.formGroup}>
        <label for="exampleInputEmail1">First Name</label>
        <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="exampleInputEmail1">Last Name</label>
        <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className = {styles.formGroup}>
        <label for="exampleInputEmail1">Phone</label>
        <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
    </div>
    <div className = {styles.formGroup}>
        <label for="exampleInputEmail1">City</label>
        <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City"/>
    </div>
  </div>
  <div>
  <div className={styles.formGroup}>
    <label htmlFor="stateSelect">State</label>
    <select className={styles.formControl} id="stateSelect">
        {US_STATES.map(state => (
        <option key={state} value={state}>{state}</option>
        ))}
    </select>
   </div>
        <div className={styles.formGroup}>
        <label htmlFor="contractType">Contract Type</label>
        <select className={styles.formControl} id="contractType" defaultValue="">
            <option value="" disabled>Select Contract Type</option>
            <option value="Hourly">Hourly</option>
            <option value="Day">Day</option>
            <option value="Project">Project</option>
        </select>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="contractType">Budget</label>
        <select className={styles.formControl} id="contractType" defaultValue="">
            <option value="" disabled>Select Range</option>
            <option value="$0-$500">$0-$500</option>
            <option value="$0-$500">$500-$1000</option>
            <option value="$0-$500">$1000-$5000</option>
            <option value="$0-$500">$5000-$20000</option>
            <option value="$0-$500">$20000-$50000</option>
            <option value="$0-$500">$50000+</option>
        </select>
        </div>

<div className = {styles.datePicker}>
  <LocalizationProvider dateAdapter={AdapterDayjs} className = {styles.datePicker}>
    <div className = {styles.dateTitle}>When do you need me to start</div>
          <DatePicker
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
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className={`btn btn-primary ${styles.button}`}>Submit</button>
  </div>
</form>
    </div>
    );
}

export default MyForm;

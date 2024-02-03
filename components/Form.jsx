
import { useState } from 'react';
import styles from '../styles/Form.module.css'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MyForm() {

    const [date, setDate] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
    <div className = {styles.containerMain}>
       <form className = {styles.form}>
  <div className="form-group">
    <div className = {styles.containerCall}>
        <div className = {styles.title}>Call Now</div>
        <div className = {styles.number}>409-292-9017</div>
    </div>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: 300, '& .MuiInputBase-input': {
                height: '10px' 
            }}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
    </LocalizationProvider>
    </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    );
}

export default MyForm;

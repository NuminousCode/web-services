import { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; 
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import styles from '../styles/Form.module.css'

function MyForm() {
    const [contract, setContract] = useState('');
    const [startDate, setStartDate] = useState(dayjs()); 
    const [endDate, setEndDate] = useState(dayjs());    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
    };

    const handleContractChange = (event) => {
        setContract(event.target.value);
    };

    return (
    <div className = {styles.formWrapper}>
        <form onSubmit={handleSubmit} className = {styles.containerForm}>
            <div className = {styles.call}>
                Call or Text Now <br />
                402-929-9017
            </div>
            <TextField className = {styles.textInput} label="First Name" variant="outlined" margin="normal" required fullWidth />
            <TextField className = {styles.textInput} label="Last Name" variant="outlined" margin="normal" required fullWidth />
            <TextField className = {styles.textInput} label="Email" type="email" variant="outlined" margin="normal" required fullWidth />
            <TextField className = {styles.textInput} label="Phone" type="tel" variant="outlined" margin="normal" fullWidth />
            <TextField className = {styles.textInput} label="City" variant="outlined" margin="normal" fullWidth />
            <TextField className = {styles.textInput} label="State" variant="outlined" margin="normal" fullWidth />
            <TextField className = {styles.textInput} label="Country" variant="outlined" margin="normal" fullWidth />

            <FormControl fullWidth margin="normal">
                <InputLabel id="contract-label">Contract</InputLabel>
                <Select
                    labelId="contract-label"
                    value={contract}
                    label="Contract"
                    onChange={handleContractChange}
                >
                    <MenuItem value="Hourly">Hourly</MenuItem>
                    <MenuItem value="Day">Day</MenuItem>
                    <MenuItem value="Project">Project</MenuItem>
                </Select>
            </FormControl>

            <TextField label="Budget" variant="outlined" margin="normal" fullWidth />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box marginY={2}>
                    <DatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={startDate}
                        onChange={setStartDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box marginY={2}>
                    <DatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDate}
                        onChange={setEndDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
            </LocalizationProvider>

            <TextField
                label="Describe Project"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
            />

            <Button className = {styles.button} type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
                Submit
            </Button>
        </form>
    </div>
    );
}

export default MyForm;

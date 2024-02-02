import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';

function MyForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
        </form>
    );
}

export default MyForm;

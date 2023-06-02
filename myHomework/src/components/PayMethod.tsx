import { FormControl, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import React, { HtmlHTMLAttributes } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

const PayMethod = () => {
    const [value, setValue] = React.useState<string>('credit')
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }
  return (
    <Grid container component={'form'} marginTop={'10px'}>
        <FormControl>
            <FormLabel id="payment-method"><b>Payment</b></FormLabel>
            <RadioGroup
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleRadioChange}
            >
                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
        </FormControl>
    </Grid>
  )
}

export default PayMethod
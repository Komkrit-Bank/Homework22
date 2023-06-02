import { FormControl, FormControlLabel, Grid, TextField } from "@mui/material";
import { Divider, Button } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

const PayMethod = () => {
    const [value, setValue] = React.useState<string>('credit')
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }
  return (
    <>
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
    <Grid container maxWidth={'lg'} marginY={'3%'}>
        <FormControl>
            <Grid container xs={6} component={'form'} sx={{
                display: 'flex',
                rowGap: '20px',
                columnGap: '20px'

            }}>
                <Grid xs={5}>
                    <TextField 
                    id="card-name"
                    label="Card Name"
                    placeholder="Name"
                    />
                </Grid>
                <Grid xs={5}>
                    <TextField 
                    id="card-no"
                    label="Credit Card Number"
                    placeholder="Name"
                    />
                </Grid>
                <Grid xs={3}>
                    <TextField 
                    id="cvv"
                    label="cvv"
                    placeholder="cvv"
                    />
                </Grid>
                <Grid xs={7}>
                    <TextField
                    fullWidth
                    type="date"
                    id="exp-date"
                    helperText  ="Expired Date"
                    />
                </Grid>
                <Button type='submit' variant="contained">Submit</Button>
            </Grid>
        </FormControl>
    </Grid>

    {/* <FormControl sx={{ m: 1 }} variant="">
          <InputLabel htmlFor="card-name">Name on Card</InputLabel>
          <Input
            id="card-name"
          />
    </FormControl> */}
    </>
  )
}

export default PayMethod
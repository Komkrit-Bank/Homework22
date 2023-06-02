import { Grid, TextField, Typography, MenuItem, Paper, List, ListItem, ListItemText, Divider, Box, Button } from "@mui/material"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme, styled } from "@mui/material"

const country = [
    {
        value: 'thai',
        name: 'Thailand'
    },
    {
        value: 'usa',
        name: 'United State'
    },
    {
        value: 'eng',
        name: 'England'
    },
    {
        value: 'jpn',
        name: 'Japan'
    }
]

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body1,
    height: 'auto',
    maxWidth: '100%',
    maxHeight: 'auto',
    lineHeight: '60px',
}));

const lightTheme = createTheme({palette: {mode: 'light'}});



const Billing = () => {
  return (
    <>
    <Grid container sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px'
    }}>
        <Grid container xs={7} sx={{
            display: 'flex',
            rowGap: '20px'
            }}>
            <Grid xs={6}>
                <TextField
                required
                id="name"
                label="First Name"
                placeholder="Name"
                />
            </Grid>
            <Grid xs={6}>
                <TextField
                required
                id="lastname"
                label="Last Name"
                placeholder="Lastname"
                />
            </Grid>
            <TextField 
            fullWidth
            id="email"
            label="Email(Optional)"
            placeholder="Email"
                />
            <TextField 
            fullWidth
            id="username"
            label="Username"
            placeholder="Username"
                />
            <TextField 
            fullWidth
            id="address"
            label="Address"
            placeholder="Address"
                />
            <TextField 
            fullWidth
            id="address2"
            label="Address2(Optional)"
            placeholder="Address2"
                />
            <Grid container sx={{
                columnGap: '15px'
            }}>
                <Grid xs={4}>
                    <TextField
                    select
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    helperText="Choose Your Country"
                    >
                        {country.map((con)=>(
                        <MenuItem key={con.value} value={con.value}>
                            {con.name}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={3}>
                    <TextField
                    fullWidth
                    required
                    select
                    id="province"
                    label="Province"
                    helperText="Choose Your Province"
                    />
                </Grid>
                <Grid xs={3}>
                    <TextField
                    fullWidth
                    required
                    id="zipcode"
                    label="Zipcode"
                    placeholder="Zipcode"
                    helperText="Your Zipcode"
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={4}>
            <Typography variant="h4" component={'div'} marginBottom={'2%'}>
                Your Cart
            </Typography>
            <ThemeProvider theme={lightTheme}>
                <Item elevation={2}>
                    <List>
                        <ListItem sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <ListItemText disableTypography sx={{height: '50px'}}
                            primary={
                                <Typography variant="h6" sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '-5px'
                                }}>Product Name</Typography>
                        }  
                            secondary={
                                <Typography variant="body2" color={'gray'}>
                                    Brief description</Typography>}/>
                            <ListItemText primary='$12' sx={{textAlign: 'right'}}/>
                        </ListItem>
                        <Divider/>
                        <ListItem sx={{
                            justifyContent: 'space-between'
                        }}>
                            <ListItemText disableTypography sx={{height: '50px'}}
                            primary={
                                <Typography variant="h6" sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '-5px'
                                }}>Second Product</Typography>
                        }  
                            secondary={
                                <Typography variant="body2" color={'gray'}>
                                    Brief description</Typography>}/>
                            <ListItemText primary='$8' sx={{textAlign: 'right'}}/>
                        </ListItem>
                        <Divider/>
                        <ListItem sx={{
                            justifyContent: 'space-between'
                        }}>
                            <ListItemText disableTypography sx={{height: '50px'}}
                            primary={
                                <Typography variant="h6" sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '-5px'
                                }}>Third Product</Typography>
                        }  
                            secondary={
                                <Typography variant="body2" color={'gray'}>
                                    Brief description</Typography>}/>
                            <ListItemText primary='$5' sx={{textAlign: 'right'}}/>
                        </ListItem>
                        <Divider/>
                        <ListItem sx={{
                            justifyContent: 'space-between',
                            bgcolor: '#FBFBF9',
                        }}>
                            <ListItemText disableTypography sx={{height: '50px', }}
                            primary={
                                <Typography variant="h6" sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '-5px',
                                    color: 'green'
                                }}>Promo Code</Typography>
                        }  
                            secondary={
                                <Typography variant="body2" color={'green'}>
                                    EXAMPLECODE</Typography>}/>
                            <ListItemText primary='-$5' sx={{textAlign: 'right', color: 'green'}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Total (USD)'/>
                            <ListItemText primary='$20' sx={{textAlign: 'right'}}/>
                        </ListItem>
                    </List>
                </Item>
                <Box component='form' marginTop={'15px'} display={'flex'} justifyContent={'center'}>
                    <TextField size="small"
                        required
                        id="promo"
                        label=""
                        placeholder="Promo Code"
                        />
                    <Button variant="contained" color='inherit'>REDEEM</Button>
                </Box>
            </ThemeProvider>
        </Grid>
    </Grid>
    <Grid container marginTop={'3%'} component={'form'}>
        <Grid xs={7}>
            <Divider/>
                <FormControlLabel control={<Checkbox defaultChecked/> } 
                sx={{marginBottom: '5px', marginTop: '5px'}}
                    label="Shipping address is the same as my billing address" />
                <FormControlLabel control={<Checkbox/>}
                sx={{marginBottom: '5px', marginTop: '5px'}} 
                    label="Save this information for next time" />
            <Divider/>
        </Grid>
    </Grid>
    </>
  )
}

export default Billing
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../stylesheets/ItemImage.css'
import { Image } from 'mui-image'
import {styled, ThemeProvider, createTheme, Button} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 'auto',
    lineHeight: '50px'
  }));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  }));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const ItemImage = () => {
  return (
    <>
    <Grid container spacing={2} mt={3} >
        <Grid xs={6}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Image src='./src/images/Acer.jpg' 
                width={'80%'} height={'auto'}/>
            </Box>
        </Grid>
        <Grid xs={6}>
                {[lightTheme].map((theme, index) => (
                <Grid xs={12} key={index}>
                    <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        }} component="form" autoComplete="off"
                    >
                        <Item elevation={24}>
                        <Typography  
                            color="text.secondary"
                            variant="h5" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '30%',
                                ml: '5%',
                                fontWeight: 'bold'
                            }}>
                            {`Acer Notebook`}
                        </Typography>
                            <Divider/>
                            <Div>
                                <p className='title__paper' ><b>Price: </b> 399$</p>
                            </Div>
                            <Div>
                                <p className='body__paper'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                                </p>
                            </Div>
                            <Div>
                                <TextField id="qty" label="Quantity" variant="outlined" 
                                            sx={{
                                                marginLeft: '5%',
                                                width: '90%'
                                                }} /><br/>
                            </Div>
                            <Div>
                                <Button size='small' variant='contained' sx={{
                                            marginLeft: '5%'
                                        }}>add to cart</Button>
                            </Div>
                        </Item>
                    </Box>
                    </ThemeProvider>
                </Grid>
                ))}
        </Grid>
        <Grid xs={5} sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: '5%',
            my: '-5px'
        }}>
            <h5><b>Stock:</b> 75/100</h5>
            <BorderLinearProgress variant="determinate" value={50}
                sx={{
                    width: '80%'
                }}/>
            
        </Grid>
        <Grid xs={6} sx={{
            marginLeft: '2%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                <List>
                    <ListItem disablePadding>
                        <Typography variant={'h6'}>
                            <b>Specification</b>
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                            Intel Core i5-11320H
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                            8GB SO-DIMM DDR4 3200
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                            512GB SSD M.2 2242 PCIe 3.0x4 NVMe
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                             Windows 11 Home 64
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                            Built-in HD Webcam (720p HD Camera HD Camera) with privacy shutter
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Typography variant={'body2'} >
                        1x power connector,1x Ethernet (RJ-45) , 1x USB-C 3.2 Gen 1 (support data transfer only) , 1x headphone / microphone combo jack (3.5mm) , 1x HDMI 2.0 , 2x USB 3.2 Gen 1
                        </Typography>
                    </ListItem>
                    <Divider />    
                </List>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default ItemImage
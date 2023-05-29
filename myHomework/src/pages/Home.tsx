import Header from "../components/Header";
import Card from "../components/Card";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";



const Home = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
    }}>
        <Header/>
    </Box>

    <Grid container sx={{
        justifyContent: 'center',
        columnGap: '30px',
        rowGap: '30px'
    }}>
        <Card/>
    </Grid>
    </>
  )
}

export default Home
import Header from "../components/Header";
import Card from "../components/Card";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const Home = () => {
  let testNum = 10
  let objects:any = []
  function loopTest(round: number) {
        for (let i = 0; i < round; i++){
            objects.push(<Card/>)
        }
    }

    loopTest(testNum)
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "20px"
    }}>
        <Header/>
        <Container sx={{
        }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {objects}
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Home
import { Container, Box, Paper, Rating, Typography } from "@mui/material";
// import { useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ReviewCard from "./ReviewCard";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

const lightTheme = createTheme({palette: {mode: 'light'}})
// const darkTheme = createTheme({palette: {mode: 'dark'}})

const Review = () => {
    // const [value, setValue] = useState<number | null>(2);

    return (
        <Container>
            <ThemeProvider theme={lightTheme}>
            <Box       
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: 'auto',
                    },
                    alignContent: 'center'
                }}>
                <Item elevation={2}>
                    <Typography component="legend" marginTop={'25px'}><b>Rating This Product</b></Typography>
                    <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        value={2.5}
                        size="large"
                        // onChange={(event, newValue) => {
                        // setValue(newValue);
                        // }}
                    />
                </Item>
                <Grid container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    rowGap: '15px'
                }}>
                    <ReviewCard/>
                </Grid>
            </Box>
            </ThemeProvider>
        </Container>
    )
}

export default Review
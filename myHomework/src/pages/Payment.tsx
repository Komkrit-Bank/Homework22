import Billing from "../components/Billing"
import Navbar from "../components/Navbar"
import { Container, Typography, Box } from '@mui/material'
import PayMethod from "../components/PayMethod"

const Payment = () => {
  return (
    <>
        <Navbar/>
        <Container maxWidth='md'>
            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                my: '4%',
                gap: '20px'
            }}>
                <Typography variant="h4" >
                    <b>Checkout Form</b>
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'start', textIndent: '10%'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, odio optio est aliquam unde aspernatur voluptates, eligendi mollitia reiciendis magni amet assumenda impedit eum perferendis ad commodi nesciunt, aperiam tenetur.
                </Typography>
            </Box>
        </Container>
        <Container maxWidth='lg'>
            <Typography variant="h4" component="h4" marginBottom={'10px'}>
                Billing Information
            </Typography>
            <Billing/>
        </Container>
        <Container maxWidth='lg'>
            <PayMethod/>
        </Container>
    </>
  )
}

export default Payment
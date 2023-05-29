import Button from "@mui/material/Button/Button"
import Stack  from "@mui/material/Stack"
import { Box } from "@mui/material"

const Header = () => {
  return (
    <>
    <Box
        sx={{
        display:"flex",
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth:'sm'
        }}>
        <h1>Album Layout</h1>
        <p style={{marginBottom: '30px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam iste, necessitatibus, harum eligendi distinctio cum, quasi inventore eos maxime molestias. Quod corrupti harum cumque officia hic dolore ipsa exercitationem.</p>
        <Stack spacing={2} direction="row">
            <Button variant="contained">MAIN CALL TO ACTION</Button>
            <Button variant="outlined">SECONDY ACTION</Button>
        </Stack>
    </Box>
    </>
  )
}

export default Header
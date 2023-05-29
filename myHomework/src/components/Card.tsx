import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const itemCard = () => {

  let testNum = 6
  const imgs = ['brownone.jpg', 'camel.jpg', 'green_little.jpg', 'iguana.webp', 'smile.jpg', 'colorful.jpg']

  function loopTest(round: number) {
    let objects:any = []
    for (let i = 0; i < round; i++){
        objects.push(
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image= {`/src/images/${imgs[i]}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='contained' color='success'>MEET FRIEND</Button>
              <Button size="small" color='success'>Detail</Button>
            </CardActions>
          </Card>
        )
    }
    return objects
}

  return (loopTest(testNum))
}

export default itemCard
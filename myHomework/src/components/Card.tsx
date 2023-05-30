import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const itemCard = () => {

  let testNum = 6
  const item_list = [
    {id: 101, name: 'Alienware', img: 'alienware.jpg'},
    {id: 102, name: 'Acer Notebook', img: 'Acer.jpg'},
    {id: 103, name: 'Asus Notebook', img: 'Asus.webp'},
    {id: 104, name: 'Dell Notebook', img: 'dell.jpg'},
    {id: 105, name: 'Lenovo Notebook', img: 'lenovo.webp'},
    {id: 106, name: 'Macbook', img: 'macbook.jpg'},
  ]

  function loopTest(round: number, items: any) {
    let objects:any = []
    for (let i = 0; i < round; i++){
        objects.push(
          <Card key={items[i]['id']} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt=""
              height="140"
              image= {`/src/images/${items[i]['img']}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {items[i]['name']}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                textIndent: '10%'
              }}>
                a computer that is portable and suitable for use while traveling. looking for your fevorite one with us
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='contained' color='info'>Add to Cart</Button>
              <Button size="small" color='info' href='/item'>Detail</Button>
            </CardActions>
          </Card>
        )
    }
    return objects
}

  return (loopTest(testNum, item_list))
}

export default itemCard
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const customers: {[index: string]: any} =[
  {cus_id: 1001, 
    name: 'Komkrit Visetkhumphai', 
    detail: 'This item is quite valueable and recommend for anyone who looking for budget laptop',
    value: 5},
  {cus_id: 1002,
   name: 'Nuttawut Visetkhumphai',
   detail: 'Very good in every look, light weight and good design',
   value: 4}
]


export default function ReviewCard() {
  const cusLoop = (customer:any) => {
    const object:any = []
    for (let i = 0; i < customer.length; i++){
        object.push(
          <>
          <Card key={customer[i].cus_id} sx={{ minWidth: 1000 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <b>{customer[i].name}</b>
              </Typography>
              <Typography variant="body2" sx={{textIndent: '5%', mt: '2%'}}>
                {customer[i].detail}
              </Typography>
            </CardContent>
            <CardActions>
              <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        size='large'
                        precision={0.5}
                        value={customer[i].value}
                        readOnly />
              <Typography variant="body2" ml={2}>
                <b>{labels[customer[i].value]}</b>
              </Typography>
            </CardActions>

          </Card>
        </>
      )
    }
    return object
  }

  return cusLoop(customers)
}
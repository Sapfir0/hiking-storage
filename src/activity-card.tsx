import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

type TActivity = {
  name: string,
  distance: string,
  country: string,
  wikiLoc: string
}

type TActivityCardProps = {
  activity: TActivity
}

export function ActivityCard({activity}: TActivityCardProps) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: '10px' }}>
      <CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/src/assets/ayulu.jpg"
        />
        <Typography variant="h5" component="div">
          {activity.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
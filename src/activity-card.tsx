import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import TerrainIcon from '@mui/icons-material/Terrain';
import RouteIcon from '@mui/icons-material/Route';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import type { TTrekking } from './types.ts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

type TActivityCardProps = {
  activity: TTrekking
}

function Param({ title, icon, value }: {title: string, value: string | number, icon: React.ReactElement}) {
  return <div style={{ display: 'flex' }}>
    {icon}
    <div>
      <Typography>{title}</Typography>
      <Typography>{value}</Typography>
    </div>
  </div>;
}

export function ActivityCard({ activity }: TActivityCardProps) {
  return (
    <Card sx={{ maxWidth: 600, borderRadius: '10px', boxShadow: ' -12px -4px 30px -3px rgba(0, 0, 0, 0.5);' }}>
      <CardMedia
        component="img"
        height="250"
        image={activity.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.name}
        </Typography>
        <div style={{ display: 'flex' }}>
          <PlaceIcon color="disabled"/>
          <Typography
            sx={{ color: 'text.secondary', mb: 1.5 }}>{activity.mountainSystem}, {activity.country}</Typography>
        </div>

        <Param title="Distance" value={`${Math.round(activity.distance)} km`} icon={<TerrainIcon color="disabled"/>}/>
        <Param title="Accent" value={`${activity.accent} m`} icon={<RouteIcon color="disabled"/>}/>
        <Param title="Days" value={activity.days.length + 1} icon={<CalendarTodayIcon color="disabled"/>}/>

        <Typography>{activity.description}</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
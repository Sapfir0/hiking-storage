import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
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
  return <Box
    sx={{
      display: 'inline-flex',
      gap: '5px'
    }}
  >
    {icon}
    <div>
      <Typography>{title}</Typography>
      <Typography>{value}</Typography>
    </div>
  </Box>;
}

export function ActivityCard({ activity }: TActivityCardProps) {
  return (
    <Card sx={{ borderRadius: '10px', boxShadow: ' -8px -4px 20px -2px rgba(0, 0, 0, 0.5);' }}>
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


        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <Param title="Distance" value={`${Math.round(activity.distance)} km`} icon={<TerrainIcon color="disabled"/>}/>
          <Divider orientation="vertical" flexItem/>
          <Param title="Accent" value={`${activity.accent} m`} icon={<RouteIcon color="disabled"/>}/>
          <Divider orientation="vertical" flexItem/>
          <Param title="Days" value={activity.days?.length + 1} icon={<CalendarTodayIcon color="disabled"/>}/>
        </Box>


        <Typography>{activity.description}</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
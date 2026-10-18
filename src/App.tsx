import './App.css';
import { List, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { ActivityCard } from './activity-card.tsx';
import { trekkingData } from './data/data.ts';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<'trekking' | 'hiking'>('trekking');

  return (
    <>
      <Tabs value={currentTab} onChange={(e, value) => {setCurrentTab(value);}} aria-label="basic tabs example">
        {Object.keys(trekkingData).map(key => <Tab value={key} label={key}/>)}
      </Tabs>
      <List
        sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
        component="nav"
      >
        {trekkingData[currentTab].map((activity, i) =>
          <ActivityCard key={activity.name + i} activity={activity}/>)}
      </List>
    </>
  );
}

export default App;

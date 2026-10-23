import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { REGIONS, TAGS } from './services/filter-services.tsx';
import { TagSelector } from './components/type-selector.tsx';
import { ActivityCard } from './components/activity-card.tsx';
import type { TActivityStructure, TTrekking } from './types.ts';
import { trekkingData } from './data';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('trekking');

  return (
    <>
      <TagSelector tags={REGIONS} multiple={false}/>
      <TagSelector tags={TAGS} multiple={true}/>
      <Tabs value={currentTab} onChange={(_, value) => {setCurrentTab(value);}}>
        {Object.keys(trekkingData).map(key => <Tab value={key} label={key}/>)}
      </Tabs>
      <Grid container spacing={3}>
        {trekkingData[currentTab].map((activity, i) =>
          <Grid sx={{}}>
            <ActivityCard key={activity.name + i} activity={activity as TTrekking}/>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default App;

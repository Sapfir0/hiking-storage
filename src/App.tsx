import './App.css';
import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import type { TTrekking } from './types.ts';
import { TrekkingCard } from './components/trekking-card.tsx';
import { trekkingData } from './data/data.ts';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<'trekking' | 'hiking'>('trekking');

  return (
    <>
      <Tabs value={currentTab} onChange={(_, value) => {setCurrentTab(value);}} aria-label="basic tabs example">
        {Object.keys(trekkingData).map(key => <Tab value={key} label={key}/>)}
      </Tabs>
      <Grid container spacing={5}>
        {trekkingData[currentTab].map((activity, i) =>
          <Grid>
            <TrekkingCard key={activity.name + i} activity={activity as TTrekking}/>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default App;

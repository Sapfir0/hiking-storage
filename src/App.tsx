import './App.css';
import { Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import type { TActivityStructure, TTrekking } from './types.ts';
import { TrekkingCard } from './components/trekking-card.tsx';
import { trekkingData } from './data';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<keyof TActivityStructure>('trekking');

  return (
    <>
      <Tabs value={currentTab} onChange={(_, value) => {setCurrentTab(value);}}>
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

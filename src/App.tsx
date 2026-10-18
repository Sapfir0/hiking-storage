import './App.css'
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { ActivityCard } from './activity-card.tsx';
import trekkingData from './data.json'

function App() {
  console.log(trekkingData, Object.keys(trekkingData))
  const [currentTab, setCurrentTab] = useState()

  return (
    <>
      <Tabs value={currentTab} onChange={(e, value) => {setCurrentTab(value)}} aria-label="basic tabs example">
        {Object.keys(trekkingData).map(key => <Tab value={key} label={key} />)}
      </Tabs>
      <ActivityCard activity={trekkingData.trekking[0]} />
    </>
  );
}

export default App

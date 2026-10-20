import App from './App.tsx';
import { Routes, Route } from 'react-router';
import { trekkingData } from './data';
import { Arhyz } from './arhyz';

export function MainRouter() {

  return <Routes>
    <Route path="/" element={<App/>}/>
    <Route path={trekkingData.trekking[0].link} element={<Arhyz/>}/>
  </Routes>;
}

import './App.css';
import fetchMissions from './api/fetchMissions';
import MissionForm from './components/MissionForm';
import MissionsList from './components/MissonsList';
import { useState } from 'react';

function App(props: any) {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [missions, setMissions] = useState([]);

  const getData = () => {
    setIsFetchingData(true);
    fetchMissions().then(res => {
      setIsFetchingData(false);
      setMissions(res.data);
    })
  }

  return (
    <div className="App">
      <h1>Space Missions</h1>
      <MissionForm getData={getData} isFetchingData={isFetchingData} />
      <MissionsList missions={missions} />
    </div>
  );
}

export default App;

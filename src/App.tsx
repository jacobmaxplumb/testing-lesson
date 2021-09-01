import './App.css';
import { fetchMissions } from './api/fetchMissions';
import MissionForm from './components/MissionForm';
import MissionsList from './components/MissonsList';

function App(props: any) {
  const randomFunction = () => {
    console.log('yay');
  }
  return (
    <div className="App">
      <h1>Space Missions</h1>
      <MissionForm getData={randomFunction} />
      <MissionsList />
    </div>
  );
}

export default App;

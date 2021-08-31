import './App.css';
import { fetchMissions } from './api/fetchMissions';
import MissionForm from './components/MissionForm';
import MissionsList from './components/MissonsList';

function App() {
  return (
    <div className="App">
      <h1>Space Missions</h1>
      <MissionForm />
      <MissionsList />
    </div>
  );
}

export default App;

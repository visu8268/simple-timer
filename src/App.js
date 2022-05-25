import logo from './logo.svg';
import './App.css';
import Timer from "./component/Timer"

function App() {
  return (
    <div className="App">
      <Timer sec={1000} end={60} start={0}/>
     
    </div>
  );
}

export default App;

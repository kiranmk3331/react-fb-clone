
import './App.css';
import  {Header}  from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    
      <Header />
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;

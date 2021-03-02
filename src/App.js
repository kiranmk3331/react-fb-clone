
import './App.css';
import Feed from './feed/Feed';
import  {Header}  from './header/Header';
import Login from './login/Login';
import { Sidebar } from './sidebar/Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import './App.css';
import{ useState} from 'react';
import Body from './components/body';
import Header from './components/header';
import Login from './components/login';

function App() {
  const [isLoggedin,setLoggedIn]=useState(false);

  const loginhandler=(islogin)=>{
    setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <Header></Header>
      <h3>Order Food</h3>
      {isLoggedin?<Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>
      }
    </div>
  );
}

export default App;

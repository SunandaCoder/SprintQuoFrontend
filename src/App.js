import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Signin from './pages/signin/signin';
import param from './pages/dashboard/parameter/voting';
import Voting from './pages/dashboard/parameter/voting';
import Result from './pages/results/userResults';

function App() {
  return (
        <div>
              {/* <Signin/>  */}
              {/* <param/> */}
              {/* <Voting/> */}
              <Result/>
          
        </div>
  );
}

export default App;

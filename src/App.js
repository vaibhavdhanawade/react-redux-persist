import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Dashboard/>
      <ToastContainer theme="dark"/>
    </>
  );
}

export default App;

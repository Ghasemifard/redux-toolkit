import './App.css';
import { Provider } from 'react-redux';
import store from './features/store';
import CakeContainer from './components/CakeContainer';
import MilkContiner from "./components/MilkContainer"
import UsersList from './components/UsersList';
function App() {
  return (
  <Provider store={store}>
    <CakeContainer/>
    <MilkContiner/>
    <hr/>
    <UsersList/>
  </Provider>
  );
}

export default App;

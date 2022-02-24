import logo from './logo.svg';
import './App.css';
// import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Shop from './component/Shop/Shop';
import Cart from './component/Shop/Cart';
import Navbar from './component/Navbar/Navbar'


function App() {
  return (
        <Provider store={store}>
        <Navbar/>
        <Home/>
        <Shop/>
        <Cart/>
        </Provider>
  );
}

export default App;
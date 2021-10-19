import "./App.css";
import {Route,Switch} from 'react-router-dom'
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Body/Main/Main.jsx";
import StorageProvider from "./Contexts/StorageContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails"
function App() {
  return (
    <StorageProvider>
      <Header />
      
      <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/productsdetails' component={ProductDetails}></Route>
      <Route path='/Categories/:category' component={Main}></Route>
      
      </Switch>
    </StorageProvider>
  );
}

export default App;

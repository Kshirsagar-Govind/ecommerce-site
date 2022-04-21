import Header from "./Components/Containers/Header";
import ProductCard from "./Components/Containers/[ Container ]productCard";
import DesignSystem from "./Components/DesignSystem";
import ProductDataForm from "./Components/Helper/product_data_form";
import HomeScreen from "./Components/HomeScreen";
import ItemViewScreen from "./Components/ItemViewScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddvertiseSection from "./Components/Containers/[ Container ]addSection";
import CardScroller from "./Components/Containers/[ Container ]cardScroller";
import RegistrationWrapper from "./Components/LoginRegisterScreen";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/home-page' component={HomeScreen} exact></Route>
          <Route path='/item-view-page/:product' component={ItemViewScreen} exact></Route>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/design-system' component={DesignSystem} exact></Route>
          <Route path='/product-add' component={ProductDataForm} exact></Route>
          <Route path='/product-add-section' component={CardScroller} exact></Route>
          <Route path='/registration' component={RegistrationWrapper} exact></Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;

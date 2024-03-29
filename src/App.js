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
import WishListScreen from "./Components/WishlistScreen";
import MyCartScreen from "./Components/MyCartScreen";
import PaymentScreen from "./Components/payment-screen";
import AccountScreen from "./Components/account-screen";
import AdminLogin from "./Components/admin-login";
import AdminPanel from "./Components/Admin Panel/admin-panel";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/home-page' component={HomeScreen} exact></Route>
          <Route path='/item-view-page/:product' component={ItemViewScreen} exact></Route>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/admin-login' component={AdminLogin} exact></Route>
          <Route path='/admin-panel' component={AdminPanel} exact></Route>
          <Route path='/design-system' component={DesignSystem} exact></Route>
          <Route path='/product-add' component={ProductDataForm} exact></Route>
          <Route path='/product-add-section' component={CardScroller} exact></Route>
          <Route path='/registration' component={RegistrationWrapper} exact></Route>
          <Route path='/wish-list' component={WishListScreen} exact></Route>
          <Route path='/cart-list' component={MyCartScreen} exact></Route>
          <Route path='/pay-now/:p_id' component={PaymentScreen} exact></Route>
          <Route path='/user-account' component={AccountScreen} exact></Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;

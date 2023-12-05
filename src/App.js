import "./App.css";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Products from "./Components/Products";
import SignIn from "./Components/SignIn";
import Customer from "./Components/Customer";
import ProductHeader from "./Components/ProductHeader";
import CustomerHeader from "./Components/CustomerHeader";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      buyButton: false,
      userSearch: "",
      data: [],
      page: 1,
      name: "",
      cart: {},
    };
  }

  fetchApi = async () => {
    const api_data = [];
    const page = this.state.page;

    const url = `https://api.unsplash.com/search/collections?page=${page}&query=sneakers&per_page=14&client_id=LgocMLSLobQg_g8tXus5lxr9kxk9xSWO-y4-xdspFXc`;

    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++) {
      api_data.push({
        photo: data.results[i].cover_photo.urls.small_s3,
        title: data.results[i].title,
        description: data.results[i].cover_photo.alt_description,
      });
    }
    this.setState({ data: api_data });
  };
  routeBuy = (props) => {
    this.setState({ buyButton: props });
  };
  getCustomerName = (name) => {
    this.setState({ name: name });
  };
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  handleSearch = (e) => {
    var search = e.target.value;
    this.setState({ userSearch: search });
    search = "";
  };
  handleOnClickNext = (e) => {
    e.preventDefault();
    let page = this.state.page;
    page += 1;
    this.setState({ page: page });
  };
  handleOnClickPrev = (e) => {
    let pages = this.state.page;
    if (pages > 1 && pages !== 1) {
      pages -= 1;
      this.setState({ page: pages });
    }
  };
  updateCart = () => {
    this.setState({ cart: {}, ...this.state.cart });
  };

  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate() {
    this.fetchApi();
  }
  render() {
    const {
      handleSearch,
      handleOnClickNext,
      handleOnClickPrev,
      routeBuy,
      getCustomerName,
    } = this;

    const { userSearch, data, route, buyButton, name } = this.state;

    return (
      <div>
        {route === "home" ? (
          <Header onRoute={this.onRouteChange} />
        ) : route === "product" ? (
          <ProductHeader handleSearch={handleSearch} />
        ) : (
          <CustomerHeader
            name={name}
            onRoute={this.onRouteChange}
            getCustomerName={getCustomerName}
          />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home text="Explore product" onRoute={this.onRouteChange} />
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/products"
            element={
              <Products
                userSearch={userSearch}
                handleClickNxt={handleOnClickNext}
                handleClickPrev={handleOnClickPrev}
                photos_data={data}
                onRoute={this.onRouteChange}
                buyButton={buyButton}
                value="buy"
              />
            }
          />
          <Route
            exact
            path="/signIn"
            element={
              <SignIn onRoute={this.onRouteChange} routeBuy={routeBuy} />
            }
          />
          <Route
            exact
            path="/customer"
            element={
              <Customer
                onRoute={this.onRouteChange}
                handleClickNxt={handleOnClickNext}
                handleClickPrev={handleOnClickPrev}
                photos_data={data}
                buyButton={buyButton}
                name={name}
                getCustomerName={getCustomerName}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;

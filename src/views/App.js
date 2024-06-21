import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../components/login/Login";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "../components/homepage/Home";
import ProductDetail from "../components/detail/ProductDetail";
import CategoryProductList from "../components/category/CategoryProductList";
import Profile from "../components/profile/Profile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route Component={ProtectedRoute}>
          <Route path="/home" Component={Home} />
          <Route path="/products/:id" Component={ProductDetail} />
          <Route path="/category/:category" Component={CategoryProductList} />
          <Route path="/profile" Component={Profile} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};
export default App;

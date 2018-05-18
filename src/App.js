//BASICS
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//COMPONENTS
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import MyAccount from "./components/MyAccount";

//ROUTES
import * as routes from './constants/routes';

//CSS
import './App.css';
import "./styles/css/bootstrap.min.css";

//AUTH
import withAuthentication from "./components/withAuthentication";

const App = () =>
  <Router>
    <div>
      <Navigation />

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.MY_ACCOUNT+ "id"} component={() => <MyAccount />} />
    </div>
  </Router>

export default withAuthentication(App);
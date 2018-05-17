import React from 'react';
import withAuthorization from "./withAuthorization";
import Browse from './browse';

const HomePage = () =>
  <div className="container">
    <h1>Bonjour {this.state.authUser}</h1>
    <Browse />
  </div>

const authCondition = (authUser) => !!authUser;

//export default HomePage; //To be changed by the following sentence

export default withAuthorization(authCondition)(HomePage);


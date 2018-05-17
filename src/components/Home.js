import React from 'react';
import withAuthorization from "./withAuthorization";
import Browse from './browse';

const HomePage = () =>
  <div className="container">
    <Browse />
  </div>

const authCondition = (authUser) => !!authUser;

//export default HomePage; //To be changed by the following sentence

export default withAuthorization(authCondition)(HomePage);


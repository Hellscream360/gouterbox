import React from 'react';
import withAuthorization from "./withAuthorization";
import Browse from './browse';

const HomePage = () =>
  <div className="container">
    <Browse />
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
refs/remotes/origin/master

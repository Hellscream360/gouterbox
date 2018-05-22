import React from 'react';
import withAuthorization from "./withAuthorization";
import Browse from './browse';
import * as firebase from '../firebase';

class HomePage extends React.Component {
  render()  {
    return (
      <div className="container">
        <Browse />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);


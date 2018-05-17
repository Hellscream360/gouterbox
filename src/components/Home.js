import React from 'react';
import withAuthorization from "./withAuthorization";

const HomePage = () =>
  <div className="container">
    <h1>Acceuil</h1>
    <p>Acceuil accessible par tous les utilisateurs connectés</p>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
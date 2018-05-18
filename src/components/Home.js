import React from 'react';
import withAuthorization from "./withAuthorization";
import Browse from './browse';
import userContext from "./AuthUserContext";
import { db } from '../firebase';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render()  {
    const { users } = this.state;
    let name;

    for ( let user in users )
    {
      if (users.hasOwnProperty(user))
      {
        name = users[user].username;
      }
    }
    
    return (
      <div className="container">
        <Browse name={name}/>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);


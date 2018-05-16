import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import * as routes from "../constants/routes";

const SignUp = ({ history }) =>
  <div className="container">
    <h1>Sign up</h1>
    <SignUpForm history={history} />
  </div>

const SignUpLink = () =>
  <p>
    Don't have an account ?
    {" "}
    <Link to={routes.SIGN_UP}>Sign up</Link>
  </p>

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: ""
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne
    } = this.state;

    const {
      history
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({...INITIAL_STATE}));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="form-control"
          value={username}
          onChange={event => this.setState(byPropKey("username", event.target.value))}
          placeholder="Username"
          type="text"
        />
        <input
          className="form-control"
          value={email}
          onChange={event => this.setState(byPropKey("email", event.target.value))}
          placeholder="Email"
          type="text"
        />
        <input
          className="form-control"
          value={passwordOne}
          onChange={event => this.setState(byPropKey("passwordOne", event.target.value))}
          placeholder="Password"
          type="password"
        />
        <input
          className="form-control"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey("passwordTwo", event.target.value))}
          placeholder="Confirm password"
          type="password"
        />
        <hr/>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignUp);

export {
  SignUpForm,
  SignUpLink
}
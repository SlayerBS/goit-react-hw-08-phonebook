import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import path from "./routesPath";

const HomePage = lazy(() =>
  import("./views/HomeView/HomeView.js" /*webpackChunkName: 'home-page' */)
);
const Register = lazy(() =>
  import(
    "./views/RegisterView/RegisterView.js" /*webpackChunkName: 'register-page' */
  )
);
const Login = lazy(() =>
  import("./views/LoginView/LoginView.js" /*webpackChunkName: 'Login-page' */)
);

const Contacts = lazy(() =>
  import(
    "./views/ContactsView/ContactsView.js" /*webpackChunkName: 'contacts-page' */
  )
);

class App extends Component {
  static propTypes = {
    onGetCurretnUser: PropTypes.func,
  };
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path={path.home} component={HomePage} />
            <PublicRoute
              path={path.register}
              restricted
              redirectTo={path.contacts}
              component={Register}
            />
            <PublicRoute
              path={path.login}
              restricted
              redirectTo={path.contacts}
              component={Login}
            />
            <PrivateRoute
              path={path.contacts}
              redirectTo={path.login}
              component={Contacts}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

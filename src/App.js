import React, { Component, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error";
import { getCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import path from "./routesPath";
import { getError } from "./redux/auth/auth-selectors";

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
    const { error } = this.props;
    console.log(error);

    return (
      <>
       
        <AppBar />
        {error && <Error message={error} />}
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
          <Toaster position="top-right" />
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  error: getError(state),
});
const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

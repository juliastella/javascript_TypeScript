import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false; // Corrigido: isLoggeId para isLoggedIn

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} // Corrigido: pathename para pathname
      />
    );
  }

  return <Route {...rest} component={Component} />; // Corrigido: Router para Route
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};

MyRoute.defaultProps = {
  isClosed: false,
};

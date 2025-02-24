import React from 'react';
import { Switch } from 'react-router-dom';
// import { toast } from 'react-toastify';

import MyRoute from './MyRouter';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  // toast.success('Oie, sucesso!');
  // toast.error('Oie, erro!');

  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

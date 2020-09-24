import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppContext } from '../libs/contextLib';
import ConditionalWrap from './ConditionalWrap';

function querystring(name, url = window.location.href) {
  // console.log('name: ', name);
  // console.log('URL: ', url);
  name = name.replace(/[[]]/g, '\\$&');
  // console.log('NAME: ', name);

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
  // console.log('REGEX: ', regex);
  const results = regex.exec(url);
  // console.log('RESULTS: ', results);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default function UnauthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useAppContext();
  const redirect = querystring('redirect');

  return (
    <Route {...rest}>
      <ConditionalWrap shouldWrap={!isAuthenticated} wrap={() => children}>
        <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />
      </ConditionalWrap>
    </Route>
  );
}

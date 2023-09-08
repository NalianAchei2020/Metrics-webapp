import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../pages/details';

it('Mission should render', () => {
  const details = render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  );
  expect(details).toMatchSnapshot();
});

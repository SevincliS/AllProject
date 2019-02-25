import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import {Provider} from "react-redux";
import {createStore} from "redux";
import selectReducer from "../imports/redux/reducer";

Meteor.startup(() => {
  const store = createStore(selectReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('react-target')

  );
});

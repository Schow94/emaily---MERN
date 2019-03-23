import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//pulling out all action creators and assigning to object(actions)
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      //materialize assumes you have a root element/component with container

      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);

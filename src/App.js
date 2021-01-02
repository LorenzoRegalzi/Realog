import React from 'react';
import Navigation from './components/common/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import PageRenderer from './page-renderer'
import { responsiveArray } from 'antd/lib/_util/responsiveObserve';

function App() {
  const user = {
    firstName: 'Marco',
    lastName: 'Rossi',
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

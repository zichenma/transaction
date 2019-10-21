import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Provider store={store}>
       <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/:account_id'  component={Detail}></Route>
          </Switch>
        </BrowserRouter>
       </div>
    </Provider>
  );
}

export default App;

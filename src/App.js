import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RepoBookmark from './container/bookmark/RepoBookmark';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={RepoBookmark} />
          {/* <Route path="/register" component={RepoRegister} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

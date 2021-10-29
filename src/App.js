import React from 'react';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';

function App() {
  return (
    <BrowserRouter>
      <RootContainer>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route path="/register" component={} /> */}
        </Switch>
      </RootContainer>
    </BrowserRouter>
  );
}

export default App;

const RootContainer = styled.div`
  width: 100%;
`;

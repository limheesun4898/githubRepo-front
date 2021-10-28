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
          <MainContainer>
            <Route exact path="/" component={Main} />
            {/* <Route path="/register" component={} /> */}
          </MainContainer>
        </Switch>
      </RootContainer>
    </BrowserRouter>
  );
}

export default App;

const RootContainer = styled.div`
  width: 100%;
`;

const MainContainer = styled.div`
  width: 1200px;
  height: 100%;
  display: block;
  margin: 0 auto;
`;

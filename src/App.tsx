import React, { Suspense } from 'react';

import './App.css';
import { Container, Box } from '@mui/material';
import AppHeader from './components/header/header';
import { PrimaryContainer } from './components/styles/styles';

const Dashboard = React.lazy(() => import('./components/dashboard/index'));

function App() {
  return (
    <div className="App">
      <Container >
        <AppHeader />
        <PrimaryContainer >
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
          </PrimaryContainer>
      </Container>
    </div>
  );
}

export default App;

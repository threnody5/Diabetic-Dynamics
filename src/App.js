/** @format */

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page';
import SignIn from './components/sign-in';
import SignUpPage from './pages/sign-up-page';
import LoggedIn from './components/logged-in';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/sign-in'
        element={<SignIn />}
      />
      <Route
        path='/sign-up'
        element={<SignUpPage />}
      />
      <Route
        path='/logged-in'
        element={<LoggedIn />}
      />
      <Route
        path='*'
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;

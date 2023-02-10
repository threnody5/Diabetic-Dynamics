/** @format */

import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/landing-page';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import LoggedIn from './components/logged-in';
import PageNotFound from './components/page-not-found';

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
        element={<SignUp />}
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

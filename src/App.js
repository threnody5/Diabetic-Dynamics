import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import SignedIn from './components/pets/pets-list';
import Navigation from './components/navigation';
import PageNotFound from './pages/page-not-found';
import HomeContents from './pages/home-contents';
import StoryOfMax from './pages/testimonials/MaxTestimonial';
import StoryOfRover from './pages/testimonials/RoverTestimonial';
import StoryOfCharlie from './pages/testimonials/CharlieTestimonial';
import SignedInLandingPage from './pages/signed-in-landing-page';
import PetInfo from './components/pets/pets-list/pet/petInfo';
import { AuthState } from './util/auth-state';

function App() {
  return (
    <>
      <AuthState />
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        >
          <Route
            path=''
            element={<HomeContents />}
          />
          <Route
            path='story-of-max'
            element={<StoryOfMax />}
          />
          <Route
            path='story-of-rover'
            element={<StoryOfRover />}
          />
          <Route
            path='story-of-charlie'
            element={<StoryOfCharlie />}
          />
        </Route>
        <Route
          path='/sign-in'
          element={<SignInPage />}
        />
        <Route
          path='/sign-up'
          element={<SignUpPage />}
        />
        <Route
          path='/logged-in'
          element={<SignedIn />}
        />
        <Route
          path='/pets-list'
          element={<SignedInLandingPage />}
        />
        <Route
          path='pets-list/:id'
          element={<PetInfo />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
}

export default App;

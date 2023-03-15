/** @format */

import './style.css';

import Navigation from './../../components/navigation';

import bloodGlucoseImage from './../../images/Endocrinology-Diabetes.png';
import catGentlemen from './../../images/cat-gentleman.jpeg';
import olderDog from './../../images/older-dog.jpeg';
import runningDog from './../../images/running-dog.jpeg';
import smilingDog from './../../images/smiling-dog.jpeg';

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div>
        <Navigation />
      </div>
      <div className='landing-page-intro-container'>
        <img
          src={bloodGlucoseImage}
          alt=''
          className='blood-test-image'
        />
        <span className='intro-message'>
          <p className='landing-page-message-text'>
            Hello and welcome to Diabetic Dynamics for Pets! We are a
            community dedicated to providing information, support, and
            resources for pet owners whose furry friends are living
            with diabetes. Our goal is to help pet owners understand
            this condition and provide guidance on how to care for
            their pets to help them lead happy, healthy lives. Whether
            you're seeking information on how to manage your pet's
            diabetes, looking for advice from experienced pet owners,
            or just looking for a supportive community, you've come to
            the right place. Browse our site to learn more about
            diabetes in pets and join our community today to connect
            with others who share your journey.
          </p>
        </span>
      </div>
      <div className='landing-page-gentlemen'>
        <div className='landing-page-message'>
          <p className='landing-page-message-text'>
            At Diabetic Dynamics for Pets, we understand that managing
            a pet's diabetes can be a challenge. That's why we've
            created useful charts and tools to help pet owners keep
            track of their pet's blood sugar levels, insulin dosages,
            and other important information. These charts provide a
            clear and easy-to-use way to monitor your pet's condition
            and ensure that you're providing the best possible care.
            With our charts, you'll be able to quickly see patterns
            and trends in your pet's glucose levels, and make
            adjustments to their treatment plan as needed. Whether
            you're a seasoned pet owner or new to caring for a
            diabetic pet, our charts are a valuable resource that can
            help make managing your pet's condition easier and more
            manageable.
          </p>
        </div>
        <div>
          <img
            //! PLACEH0LDER IMAGE, REPLACE WITH OOGIE
            src={catGentlemen}
            alt=''
            className='gentlemen-image'
          />
        </div>
      </div>
      <div className='gallery-image-container'>
        <img
          src={olderDog}
          alt=''
          className='gallery-image'
        />
        <img
          src={runningDog}
          alt=''
          className='gallery-image'
        />
        <img
          src={smilingDog}
          alt=''
          className='gallery-image'
        />
      </div>
    </div>
  );
}

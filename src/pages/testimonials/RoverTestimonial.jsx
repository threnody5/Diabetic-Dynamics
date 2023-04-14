import React from 'react';
import Card from '../../components/card';
import { Link } from 'react-router-dom';
import './styles.scss';

/**
 * Renders a testimonial for a dog owner about their positive experience with Diabetic Dynamics.
 */
class StoryOfRover extends React.Component {
  render() {
    return (
      <Card>
        <div className='testimonial-container'>
          <h1>Rover's Story</h1>
          <p>
            As a dog owner, I always thought my chocolate lab, Rover, was the
            picture of perfect health. He was always full of energy, loved to
            play fetch, and had a huge appetite. So when I started to notice
            that he was losing weight despite eating a lot, I knew something was
            wrong.
          </p>
          <p>
            I took him to the vet and after some tests, we received the
            devastating news that Rover had diabetes. As a dog owner, I was
            devastated. I didn't know what to do or how to help him. Thankfully,
            the vet recommended a company called Diabetic Dynamics that
            specialized in helping dogs with diabetes.
          </p>
          <p>
            I reached out to them, and they were incredibly helpful. They sent
            me all the information I needed about how to manage Rover's
            diabetes, including how to administer insulin injections, how to
            monitor his blood sugar levels, and how to adjust his diet. They
            also sent me a special food formulated for dogs with diabetes.
          </p>
          <p>
            Thanks to Diabetic Dynamics, I was able to get Rover's diabetes
            under control. It wasn't easy at first, but with their guidance, I
            was able to make the necessary adjustments to his lifestyle and keep
            him healthy. Rover is now back to his old self, full of energy and
            always ready to play.
          </p>
          <p>
            I can't thank Diabetic Dynamics enough for their help during this
            difficult time. They truly made a difference in Rover's life and
            mine as a dog owner. If you have a dog with diabetes, I highly
            recommend reaching out to them for help.
          </p>
          <h3>Sarah Jessica Parker</h3>
        </div>
        <div className='testimonial-home-link'>
          <Link to='/'>Back Home</Link>
        </div>
      </Card>
    );
  }
}

export default StoryOfRover;

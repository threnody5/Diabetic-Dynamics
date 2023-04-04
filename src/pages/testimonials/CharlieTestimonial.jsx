import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './styles.scss';

class StoryOfCharlie extends React.Component {
  render() {
    return (
      <Card>
        <div className='testimonial-container'>
          <h1>Charlie's Story</h1>
          <p>
            As a dog owner, I never thought my boxer, Charlie, would be
            diagnosed with diabetes. He was always an active dog, loved to play
            and had a big appetite. So, when he started to lose weight and
            became lethargic, I knew something was wrong.
          </p>
          <p>
            I took him to the vet, and after some tests, we received the
            heartbreaking news that Charlie had diabetes. As a dog owner, I was
            devastated. I didn't know what to do or how to help him. Thankfully,
            the vet recommended a company called Diabetic Dynamics that
            specialized in helping dogs with diabetes.
          </p>
          <p>
            I contacted Diabetic Dynamics, and they were extremely supportive.
            They sent me all the information I needed about how to manage
            Charlie's diabetes, including how to administer insulin injections,
            how to monitor his blood sugar levels, and how to adjust his diet.
            They also provided me with a special food formulated for dogs with
            diabetes.
          </p>
          <p>
            Diabetic Dynamics made the process of managing Charlie's diabetes
            much easier. Their support and guidance helped me to stay on top of
            his condition and make sure he was getting the care he needed. They
            also provided me with a support network of other dog owners going
            through the same thing, which was a great source of comfort during a
            difficult time.
          </p>
          <p>
            Thanks to Diabetic Dynamics, Charlie's diabetes is now under
            control. He is back to his old self, full of energy, and always
            eager to play. I cannot thank Diabetic Dynamics enough for their
            help and support during this difficult time. If you have a dog with
            diabetes, I highly recommend reaching out to them for help. They
            made a world of difference in Charlie's life and mine as a dog
            owner.
          </p>
          <h3>Antonio Banderas</h3>
        </div>
        <div className='testimonial-home-link'>
          <Link to='/'>Back Home</Link>
        </div>
      </Card>
    );
  }
}

export default StoryOfCharlie;

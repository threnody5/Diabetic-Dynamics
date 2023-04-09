import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import './styles.scss';

/**
 * Renders a testimonial for a dog owner about their positive experience with Diabetic Dynamics.
 */
class StoryOfMax extends React.Component {
  render() {
    return (
      <Card>
        <div className='testimonial-container'>
          <h1>Max's Story</h1>
          <p>
            My name is Lisa, and I am a dog lover. I have always had dogs in my
            life and can't imagine living without them. When I moved to the
            city, I adopted a cute little terrier mix named Max. He became my
            constant companion, following me everywhere I went.
          </p>
          <p>
            One day, I noticed that Max was drinking a lot more water than
            usual. He also seemed to be urinating more frequently. I became
            concerned and took him to the vet. After some tests, the vet
            delivered the news that I had been dreading: Max had diabetes.
          </p>
          <p>
            I was devastated. I had never dealt with anything like this before
            and didn't know where to turn. I knew I needed help to manage Max's
            diabetes, but I didn't know where to start.
          </p>
          <p>
            That's when I discovered Diabetic Dynamics. I visited their website
            and found a wealth of information about how to care for a diabetic
            dog. I also found a community of people who were going through the
            same thing I was. I felt a sense of relief knowing that I wasn't
            alone.
          </p>
          <p>
            I reached out to Diabetic Dynamics and was connected with a
            specialist who helped me understand Max's diabetes and how to manage
            it. The specialist walked me through everything I needed to do, from
            administering insulin injections to monitoring Max's blood sugar
            levels.
          </p>
          <p>
            I was amazed at how much help Diabetic Dynamics provided. They gave
            me everything I needed to care for Max and made me feel like I
            wasn't alone in this journey. I felt confident that I could manage
            Max's diabetes with their help.
          </p>
          <p>
            Over the next few weeks, I diligently followed the advice of the
            Diabetic Dynamics specialist. I monitored Max's blood sugar levels,
            gave him insulin injections, and adjusted his diet. I even started
            taking him for regular walks to help him get exercise and stay
            healthy.
          </p>
          <p>
            With the help of Diabetic Dynamics, I was able to manage Max's
            diabetes and keep him healthy. I was so grateful for their help and
            the support of the community. I knew that I could always count on
            them to provide the resources I needed to care for my beloved pet.
          </p>
          <p>
            In the end, Max lived a long and happy life, thanks to my dedication
            and the help of Diabetic Dynamics. I knew that I had made the right
            choice by reaching out to them and was thankful every day for their
            support. I will always remember how they helped me care for my furry
            friend, and I would recommend them to anyone who needs help managing
            their pet's diabetes.
          </p>
          <h3>Lisa Ann</h3>
        </div>
        <div className='testimonial-home-link'>
          <Link to='/'>Back Home</Link>
        </div>
      </Card>
    );
  }
}

export default StoryOfMax;

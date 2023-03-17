import React from 'react';
import './styles.scss';

class Card extends React.Component {
  render() {
    return <div className='card-container'>{this.props.children}</div>;
  }
}

export default Card;

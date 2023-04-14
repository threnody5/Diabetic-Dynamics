import React from 'react';
import './styles.scss';

/**
 * A reusable Card component that wraps its children in a container with a card-like design.
 */
class Card extends React.Component {
  render() {
    return <div className='card-container'>{this.props.children}</div>;
  }
}

export default Card;

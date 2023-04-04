import React from 'react';
import Modal from '../modal';

class LoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    console.log(this.state.show);
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>
          Add a new pet
        </button>
        <Modal
          onClose={() => this.setState({ show: false })}
          show={this.state.show}
        />
      </div>
    );
  }
}

export default LoggedIn;

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class PortalExample extends PureComponent {
  constructor() {
    super();
    this.state = { showModal: false };
    this.toggleModel = this.toggleModel.bind(this);
  }

  toggleModel() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <>
        <ExampleModal open={this.state.showModal} onClose={this.toggleModel}>
          Test Modal
        </ExampleModal>
        <button onClick={this.toggleModel}>Show Modal</button>
      </>
    );
  }
}

class ExampleModal extends PureComponent {
  render() {
    if (this.props.open) {
      const exampleModal = ReactDOM.createPortal(
        <div className="modal" onClick={this.props.onClose}>
          <div className="modal-content">
            <div className="modal__close">&times;</div>
            {this.props.children}
          </div>
        </div>,
        document.body
      );

      return exampleModal;
    }

    return null;
  }
}

export default PortalExample;

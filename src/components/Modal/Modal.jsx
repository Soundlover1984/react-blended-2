import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  modalRoot = document.querySelector('#modal-root');
  render() {
    return createPortal(
      <div>
        <img
          src={this.props.dataForModal.src}
          alt={`${this.props.dataForModal.src}`}
        />
      </div>,
      this.modalRoot
    );
  }
}

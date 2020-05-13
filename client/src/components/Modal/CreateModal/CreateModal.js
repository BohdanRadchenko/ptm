import React, {Component, createRef} from 'react';
import css from './CreateModal.module.scss';

export default class CreateModal extends Component {
  state = {};
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    const {current} = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const {children} = this.props;
    return (
        <div
            className={css.backdrop}
            ref={this.backdropRef}
            onClick={this.handleBackdropClick}
        >
          <div className={css.backdrop__container}>
            <div className={css.modal}>{children}</div>
          </div>
        </div>
    );
  }
}

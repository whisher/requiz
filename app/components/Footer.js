import React, { Component, PropTypes } from 'react';
import styles from '../styles/footer.css';

class Footer extends  Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    alert('fffff');
    this.props.submitForSolutions(true);
  }
  render() {
    return (
      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.normal}
          onClick={this.handleSubmit}
          disabled={this.props.isDisabled}>Submit</button>
      </div>
    );
  }
}
Footer.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  submitForSolutions: PropTypes.func.isRequired
};
export default Footer;

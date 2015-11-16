import React, { Component, PropTypes } from 'react';
import styles from '../styles/footer.css';

class Footer extends  Component {
  constructor(props) {
    super(props);
  }
  handlerSubmit(e){
    e.preventDefault();
    alert('fffff');
  }
  render() {
    return (
      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.normal}
          onClick={this.handlerSubmit}
          disabled={this.props.isDisabled}>Submit</button>
      </div>
    );
  }
}
Footer.propTypes = {
  isDisabled: PropTypes.bool.isRequired
};
export default Footer;

import React, { Component } from 'react';
import styles from '../styles/footer.css';

class Footer extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.footer}>
        <button type="submit" className={styles.normal}>Submit</button>
      </div>
    );
  }
}
export default Footer;

import React, { Component } from 'react';
import styles from './Common.css';
console.log('style',styles.footer);
class Footer extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.footer}>
        <button type="submit" className={styles.btn}>Submit</button>
      </div>
    );
  }
}
export default Footer;

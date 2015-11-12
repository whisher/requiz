import React, { Component } from 'react';
import styles from '../styles/header.css';

class Header extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className={styles.header}>Question</h1>
    );
  }
}
export default Header;

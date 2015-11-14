import React, { Component, PropTypes } from 'react';
import styles from '../styles/questionHeader.css';

class QuestionHeader extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2 className={styles.header}>{this.props.title}</h2>
    );
  }
}
QuestionHeader.propTypes = {
  title: PropTypes.string.isRequired
};
export default QuestionHeader;

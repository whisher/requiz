import React, { Component, PropTypes } from 'react';
import Options from './Options';
import styles from '../styles/question.css';

class Question extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    const question = this.props.question;
    return (
      <ul className={styles.box}>
          <Options onChoseOption={this.props.onChoseOption}  questionId={question.id} options={question.options} />
      </ul>
    );
  }

}
Question.propTypes = {
  question: PropTypes.object.isRequired,
  onChoseOption: PropTypes.func.isRequired
};

export default Question;

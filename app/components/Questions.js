import React, { Component, PropTypes } from 'react';
import Question from './Question';
import QuestionHeader from './QuestionHeader';
import styles from '../styles/questions.css';

class Questions extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    const questions = this.props.questions;
    return (
      <div className={styles.boxContainer}>
        {questions.map(this.renderQuestion, this)}
      </div>
    );
  }
  renderQuestion(question) {
    return (
      <div className={styles.box}  key={`question${question.id}`}>
        <QuestionHeader title={question.title} />
        <Question question={question} onChoseOption={this.props.onChoseOption} />
      </div>
    );
  }
}
Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  onChoseOption: PropTypes.func.isRequired
};

export default Questions;

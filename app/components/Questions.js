import React, { Component, PropTypes } from 'react';
import Question from './Question';
import QuestionHeader from './QuestionHeader';
import styles from '../styles/questions.css';

class Questions extends  Component {
  constructor(props) {
    super(props);
  }
  renderQuestion(question) {
    return (
      <div className={styles.box}  key={`question${question.id}`}>
        <QuestionHeader title={question.title} />
        <Question
        question={question}
        answers={this.props.answers}
        onChoseOption={this.props.onChoseOption}
        isSubmitForSolutions={this.props.isSubmitForSolutions} />
      </div>
    );
  }
  render() {
    const questions = this.props.questions;
    return (
      <div className={styles.boxContainer}>
        {questions.map(this.renderQuestion, this)}
      </div>

    );
  }
}
Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
  onChoseOption: PropTypes.func.isRequired,
  isSubmitForSolutions: PropTypes.bool.isRequired
};

export default Questions;

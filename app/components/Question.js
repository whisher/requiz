import React, { Component, PropTypes } from 'react';
import Options from './Options';

class Question extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    const questions = this.props.questions;
    return (
      <div className="box-container">
        {questions.map(this.renderQuestion, this)}
      </div>
    );
  }
  renderQuestion(question) {
    return (
      <div className="box"  key={`question${question.id}`}>
        <h2>{question.title}</h2>
        <ul>
          <Options onChoseOption={this.props.onChoseOption}  questionId={question.id} options={question.options} />
        </ul>
      </div>
    );
  }
}
Question.propTypes = {
  questions: PropTypes.array.isRequired,
  onChoseOption: PropTypes.func.isRequired
};

export default Question;

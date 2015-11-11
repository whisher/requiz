import React, { Component, PropTypes } from 'react';
import Options from './Options';

class Question extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    const questions = this.props.questions;
    return (
<div>
        {questions.map(this.renderQuestion)}
</div>
    );
  }
  renderQuestion(question) {
    return (
      <div className="box">
        <h2 key={`question${question.id}`}>{question.title}</h2>
        <ul>
          <Options options={question.options} />
        </ul>
      </div>
    );
  }
}
Question.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Question;

import React, { Component, PropTypes } from 'react';
import styles from '../styles/options.css';

class Options extends  Component {
  constructor(props) {
    super(props);
    this.questionId = this.props.question.id;
  }
  render() {
    const options = this.props.question.options;
    const isSubmitForSolutions = this.props.isSubmitForSolutions;
    return (
      <li>
      {isSubmitForSolutions ?
        options.map(this.renderSolutions, this) :
        options.map(this.renderOptions, this)}
      </li>
    );
  }
  renderOptions(option, index) {
    return (
      <div className={styles.normal}  key={`option${this.questionId-index}`}>
        <label className={styles.success}>
          <input
            type="radio"
            name={`question${this.questionId}`}
            value={index}
            onClick={(e) => this.optionHandler(e)}/>
          {option}
        </label>
      </div>
    );
  }
  renderSolutions(option, index) {
    let answer =  this.props.answers['question_'+this.questionId];
    let solution =  this.props.question.answer;
    let isValid = answer === solution;
    let chose = answer === index;
    let current = solution === index;
    return (
      <div className={styles.box}  key={`option${this.questionId-index}`}>
        <label className={chose ? isValid ? styles.success : styles.fail : isValid ? styles.normal : current ? styles.success :  styles.normal}>
         {option}
        </label>
      </div>
    );
  }
  optionHandler(e) {
    this.props.onChoseOption(this.questionId, e.target.value);
  }
}
Options.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,
  onChoseOption: PropTypes.func.isRequired,
  isSubmitForSolutions: PropTypes.bool.isRequired
};

export default Options;

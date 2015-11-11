import React, { Component, PropTypes } from 'react';

class Options extends  Component {
  constructor(props) {
    super(props);
    this.questionId = Math.random().toString(36).slice(2);
  }
  render() {
    const options = this.props.options;
    return (
      <li>
        {options.map(this.renderOptions,this)}
      </li>
    );
  }
  renderOptions(option,index) {
    return (
      <div class="radio" /*key={`option${this.questionId}`} give error Encountered two children with the same key*/>
        <label>
          <input type="radio" name={`question${this.questionId}`} value={index} />
          {option}
        </label>
      </div>
    );
  }
}
Options.propTypes = {
  options: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired
};

export default Options;

import React, { Component, PropTypes } from 'react';

class Options extends  Component {
  constructor(props) {
    super(props);
    this.questionId = this.props.questionId;
  }
  render() {
    const options = this.props.options;
    return (
      <li>
        {options.map(this.renderOptions, this)}
      </li>
    );
  }
  renderOptions(option, index) {
    return (
      <div className="radio"  key={`option${this.questionId-index}`}>
        <label>
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
  optionHandler(e) {
    this.props.onChoseOption(this.questionId, e.target.value);
  }
}
Options.propTypes = {
  options: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
  onChoseOption: PropTypes.func.isRequired
};

export default Options;

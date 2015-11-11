import React, { Component, PropTypes } from 'react';

class Options extends  Component {
  constructor(props) {
    super(props);
  }
  render() {
    const options = this.props.options;
    return (
      <li>
        {options.map(this.renderOptions)}
      </li>
    );
  }
  renderOptions(option,index) {
    return (
      <div class="radio">
        <label>
          <input type="radio" name="question1" value={index} />
          {option}
        </label>
      </div>
    );
  }
}
Options.propTypes = {
  options: PropTypes.array.isRequired
};

export default Options;

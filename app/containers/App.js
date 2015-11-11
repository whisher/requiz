import React, { Component } from 'react';
import Question from '../components/Question';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          title: 'Question one',
          options: ['a','b','c']
        },
        {
          id:2,
          title: 'Question two',
          options: ['a','b','c']
        },
        {
          id:3,
          title: 'Question three',
          options: ['a','b','c']
        }
      ]
    };
  }
  render() {
    const questions = this.state.questions;
    return (
      <div className={styles.container}>
       <h1>Question</h1>
       <Question  questions={questions} />
      </div>
    );
  }
}

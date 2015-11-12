import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Question from '../components/Question';
import styles from '../styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          title: 'Question one',
          options: ['a','b','c','d']
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
      ],
      answers: [1,0,2]
    };
  }
  render() {
    const questions = this.state.questions;
    return (
      <div className={styles.container}>
      <Header />
       <Question  questions={questions} />
       <Footer />
      </div>
    );
  }
}

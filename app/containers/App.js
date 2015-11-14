import React, { Component } from 'react';
import { connect } from 'react-redux';
import { choseAnswer } from '../actions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Questions from '../components/Questions';
import styles from '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          title: 'Question one',
          options: ['a','b','c','d'],
          answer: 1
        },
        {
          id:2,
          title: 'Question two',
          options: ['a','b','c'],
          answer: 0
        },
        {
          id:3,
          title: 'Question three',
          options: ['a','b','c'],
          answer: 2
        }
      ]
    };
  }
  render() {
    const { dispatch } = this.props;
    const questions = this.state.questions;
    return (
      <div className={styles.container}>
      <Header />
       <Questions  questions={questions} onChoseOption={(questionId, answerId) =>
            dispatch(choseAnswer(questionId, answerId))
          } />
       <Footer />
      </div>
    );
  }
}
export default connect()(App);


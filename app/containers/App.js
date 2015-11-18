import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, choseAnswer, submitForSolutions } from '../actions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Questions from '../components/Questions';
import styles from '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  }
  render() {
    const {
      dispatch,
      questions,
      isFetching,
      answers,
      isSubmitForSolutions} = this.props;
    const isDisabled = (questions.length && Object.keys(answers).length)
    && (questions.length === Object.keys(answers).length);
    return (
      <div className={styles.container}>
      <Header />
      {isFetching && questions.length === 0 &&
          <h2>Loading...</h2>
      }
      <Questions
        isSubmitForSolutions={isSubmitForSolutions}
        questions={questions}
        answers={answers}
        onChoseOption={(questionId, answerId) => dispatch(choseAnswer(questionId, answerId))} />
       <Footer
       submitForSolutions={(flag) => dispatch(submitForSolutions(flag))}
       isDisabled={!isDisabled} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items, answers, solutions } = state;
  const { questions, isFetching } = items;
  const { isSubmitForSolutions } = solutions;
  return {
    questions,
    isFetching,
    answers,
    isSubmitForSolutions
  };
}
export default connect(mapStateToProps)(App);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, choseAnswer } from '../actions';
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
    const { dispatch, questions, isFetching, answers} = this.props;
    const isDisabled = (questions.length && answers.length)  && (questions.length === answers.length);
    return (
      <div className={styles.container}>
      <Header />
       <Questions  questions={questions} onChoseOption={(questionId, answerId) =>
            dispatch(choseAnswer(questionId, answerId))
          } />
       <Footer isDisabled={!isDisabled} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items, answers } = state;
  const { questions, isFetching } = items;
  return {
    questions,
    isFetching,
    answers
  }
}
export default connect(mapStateToProps)(App);


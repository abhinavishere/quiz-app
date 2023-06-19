/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const StartScreen = ({ numQuestions, onStart }) => {
  return (
    <section className="start">
      <h2>Welcome to the quiz.</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={onStart}>
        Let's start
      </button>
    </section>
  );
};

export default StartScreen;

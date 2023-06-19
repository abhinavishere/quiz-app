/* eslint-disable react/prop-types */
const Progress = ({ index, numQuestions, possiblePoints, points, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {possiblePoints}
      </p>
    </header>
  );
};

export default Progress;

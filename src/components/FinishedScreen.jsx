/* eslint-disable react/prop-types */

const FinishedScreen = ({ points, possiblePoints, dispatch }) => {
  const percentage = (points / possiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {possiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;

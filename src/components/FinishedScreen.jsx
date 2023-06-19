/* eslint-disable react/prop-types */

const FinishedScreen = ({ points, possiblePoints }) => {
  const percentage = (points / possiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {possiblePoints}(
      {Math.ceil(percentage)}%)
    </p>
  );
};

export default FinishedScreen;

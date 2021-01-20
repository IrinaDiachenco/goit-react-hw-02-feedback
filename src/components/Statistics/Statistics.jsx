import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
    return (
        <>
            {total > 0 && (
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positivePercantage}</li>
                </ul>
            )}
            {total === 0 && <Notification message='No feedback given' />}
        </>
    )
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
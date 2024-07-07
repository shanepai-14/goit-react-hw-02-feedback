

// In helpers.js
export const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  
  // You can add other helper functions here as well
  export const countPositiveFeedbackPercentage = (good, total) => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
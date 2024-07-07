import React,{useState} from 'react';
import Statistics from '../components/Statistics';
import FeedbackOptions from '../components/FeebackOptions';
import Section from '../components/Section';
import { countPositiveFeedbackPercentage,countTotalFeedback } from '../helper/helper';
const Feedback = () => {
     const [good,setGood] = useState(0);
     const [neutral,setNeutral] = useState(0);
     const [bad,setBad] = useState(0);
  

     const handleFeedback = (type) => {
        switch (type) {
          case 'good':
            setGood(prevGood => prevGood + 1);
            break;
          case 'neutral':
            setNeutral(prevNeutral => prevNeutral + 1);
            break;
          case 'bad':
            setBad(prevBad => prevBad + 1);
            break;
          default:
            console.log('Invalid feedback type');
        }
      };

    return (
        <>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good,neutral,bad)}
          positivePercentage={countPositiveFeedbackPercentage(good,countTotalFeedback(good,neutral,bad))}
        />
      </Section>
      </>
    )
}

export default Feedback
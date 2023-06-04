"use client";
import { useState } from "react";



// Sending data to child componenets
const Statistics = (props) => {
  // console.log(props)
  const { good, neutral, bad } = props;

  const total = good + neutral + bad;
  const average = (good + neutral) / total;
  return (
    <>
      <h2>
        <b>statistics</b>
      </h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {average}</p>
    </>
  );
};

// Button
const Botton = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default function Feedback() {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const [history, setHistory] = useState([]);

  const handleGood = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    });
  };
  const handleNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    });
  };
  const handleBad = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    });
  };
  return (
    <>
      <h2>give feedback</h2>
      <Botton handleClick={handleGood} text="good" />
      <Botton handleClick={handleNeutral} text="neutral" />
      <Botton handleClick={handleBad} text="bad" />

      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
}

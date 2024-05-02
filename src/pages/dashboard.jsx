import React, { useState, useEffect } from 'react';

function EssayHooksQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track whether answer has been submitted
  const [correct, setCorrect] = useState(false); // Track if the submitted answer is correct
  const [score, setScore] = useState(0); // Track total score
  const [showResults, setShowResults] = useState(false); // Track whether to show quiz results
  const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time

  // Define an array of potential essay hooks questions
  const essayHooksQuestions = [
    {
      question: "What is an essay hook?",
      choices: ['A tool used to catch the reader’s attention in the first sentence or paragraph of an essay', 'A type of fishing lure', 'A software development framework', 'A tool used to indent paragraphs'],
      correctAnswer: 'A tool used to catch the reader’s attention in the first sentence or paragraph of an essay'
    },
    {
      question: "Which of the following is NOT a type of essay hook?",
      choices: ['Question hook', 'Thesis statement hook', 'Anecdote hook', 'Quotation hook'],
      correctAnswer: 'Thesis statement hook'
    },
    {
      question: "What is the purpose of a question hook?",
      choices: ['To introduce a controversial topic', 'To provide background information', 'To engage the reader by posing a question', 'To conclude the essay'],
      correctAnswer: 'To engage the reader by posing a question'
    },
    {
      question: "Which type of essay hook involves using a relevant quote from a famous person or literature?",
      choices: ['Anecdote hook', 'Quotation hook', 'Statistic hook', 'Description hook'],
      correctAnswer: 'Quotation hook'
    },
    {
      question: "What is the benefit of using an anecdote hook in an essay?",
      choices: ['It provides factual evidence to support the thesis', 'It entertains the reader with a short story or example', 'It summarizes the main points of the essay', 'It provides a statistical fact or figure'],
      correctAnswer: 'It entertains the reader with a short story or example'
    }
  ];

  // Function to load the current question
  const loadQuestion = () => {
    const currentQuestion = essayHooksQuestions[questionIndex];
    setQuestion(currentQuestion.question);
    setCorrectAnswer(currentQuestion.correctAnswer);
    setChoices([...currentQuestion.choices.sort(() => Math.random() - 0.5)]);
  };

  // useEffect hook to load the initial question when component mounts or question index changes
  useEffect(() => {
    loadQuestion();
  }, [questionIndex]);

  // useEffect hook to update elapsed time
  useEffect(() => {
    let interval;
    if (!showResults && !submitted) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000); // Update elapsed time every second
    }

    return () => clearInterval(interval);
  }, [showResults, submitted]);

  const handleSubmit = async () => {
    try {
      // Check if the selected answer is correct
      if (selectedAnswer === correctAnswer) {
        setFeedback('Correct!');
        setCorrect(true);
        setScore(score + 1); // Increment score for correct answer
      } else {
        setFeedback('Incorrect. Please try again.');
      }
      // Set submitted to true after submitting answer
      setSubmitted(true);
      // If the 5th question is submitted, show the results
      if (questionIndex === essayHooksQuestions.length - 1) {
        setShowResults(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question only if an answer has been submitted
    if (submitted) {
      // Increment the question index to move to the next question
      setQuestionIndex(questionIndex + 1);
      // Reset selected answer, feedback, and submitted for the next question
      setSelectedAnswer('');
      setFeedback('');
      setSubmitted(false);
      setCorrect(false);
    }
  };

  const handleAnswerChange = (choice) => {
    // Allow answer change only if the answer is not correct and not yet submitted
    if (!correct && !submitted) {
      setSelectedAnswer(choice);
    }
  };

  // Calculate total score percentage
  const totalQuestions = essayHooksQuestions.length;
  const scorePercentage = (score / totalQuestions) * 100;

  // Format elapsed time
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>{question}</div>
      {choices.map((choice, index) => (
        <div key={index}>
          <input
            type="radio"
            id={choice}
            name="answer"
            value={choice}
            checked={selectedAnswer === choice}
            onChange={() => handleAnswerChange(choice)}
            disabled={submitted && correctAnswer !== choice}
          />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <div>{feedback}</div>}
      <div>Elapsed Time: {formatTime(elapsedTime)}</div>
      {questionIndex < essayHooksQuestions.length - 1 && (
        <button disabled={!submitted} onClick={handleNextQuestion}>Next</button>
      )}
      {showResults && (
        <div>
          <h2>Quiz Results</h2>
          <p>Total Questions: {totalQuestions}</p>
          <p>Correct Answers: {score}</p>
          <p>Score Percentage: {scorePercentage}%</p>
          <p>Elapsed Time: {formatTime(elapsedTime)}</p>
        </div>
      )}
    </div>
  );
}

export default EssayHooksQuiz;

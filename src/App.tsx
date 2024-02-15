import { useState } from "react";

import { Quiz, Start } from "./pages/";
import { frontendQuestions, javascriptQuestions, reactQuestions, typescriptQuestions, restAPIQuestions } from "./questions";
import styles from "./App.module.scss";
import { IQuestions, Subject } from "./types/types";
import { Results } from "./pages/pages/Results";

function App() {
	const [questions, setQuestions] = useState(typescriptQuestions);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const updateQuestions = (subject: Subject, num: number) => {
    const _subject = Object.keys(subject);
    let _numSubjects = 0;
    _subject.forEach((_subject) => {
      if (subject[_subject as keyof Subject]) _numSubjects =_numSubjects + 1;
      return;
    })
    const newQuestions = [] as IQuestions[];
    if (subject["Frontend"]) {
      newQuestions.push(...questionGenerator(frontendQuestions, num / _numSubjects));
    };
    if (subject["JavaScript"]) {
      newQuestions.push(...questionGenerator(restAPIQuestions, num / _numSubjects));
    };
    if (subject.React) {
      newQuestions.push(...questionGenerator(reactQuestions, num / _numSubjects));
    };
    if (subject["REST API"]) {
      newQuestions.push(...questionGenerator(restAPIQuestions, num / _numSubjects));
    };
    if (subject.Typescript) {
      newQuestions.push(...questionGenerator(typescriptQuestions, num / _numSubjects));
    };
    setQuestions(questionGenerator(newQuestions, num));
	};

  const selectNewQuizOptions = () => {
    setShowResults(false);
		setShowQuiz(false);
  };

  const difficultyRange = [
    { 0: 100, 1: 0, 2: 0 },
    { 0: 50, 1: 50, 2: 0 },
    { 0: 25, 1: 50, 2: 25 },
    { 0: 0, 1: 50, 2: 50 },
    { 0: 0, 1: 0, 2: 100 },
  ]

  const questionGenerator = (questions: IQuestions[], num: number) => {
    const randomizedQuestions = questions.sort(() => Math.random() - 0.5);
    return randomizedQuestions.slice(0, num);
  }
  
  const startNewQuiz = (subject: Subject, num: number) => { 
    console.log(subject, num);
    updateQuestions(subject, num);
    setShowQuiz(true);
  };

  // console.log('# of TS questions: ', typescriptQuestions.length);
  // console.log('# of React questions: ', reactQuestions.length);
  // console.log('React easy questions: ', reactQuestions.filter((question) => question.level === 0).length);
  // console.log('React medium questions: ', reactQuestions.filter((question) => question.level === 1).length);
  // console.log('React hard questions: ', reactQuestions.filter((question) => question.level === 2).length);
  // console.log('# of JS questions: ', javascriptQuestions.length);
  // console.log('JS easy questions: ', javascriptQuestions.filter((question) => question.level === 0).length);
  // console.log('JS medium questions: ', javascriptQuestions.filter((question) => question.level === 1).length);
  // console.log('JS hard questions: ', javascriptQuestions.filter((question) => question.level === 2).length);
  console.log('# of Frontend questions: ', frontendQuestions.length);
  console.log('Frontend easy questions: ', frontendQuestions.filter((question) => question.level === 0).length);
  console.log('Frontend medium questions: ', frontendQuestions.filter((question) => question.level === 1).length);
  console.log('Frontend hard questions: ', frontendQuestions.filter((question) => question.level === 2).length);
  // console.log('# of REST API questions: ', restAPIQuestions.length);

	return (
		<div className={styles.appContainer}>
        {(!showQuiz && !showResults) &&
          <Start startNewQuiz={startNewQuiz} />
        }
				
				{(showQuiz && !showResults) && (
					<>
          <Quiz
            selectNewQuizOptions={selectNewQuizOptions}
            questions={frontendQuestions}
            // questions={questions}
            setShowResults={setShowResults}
          />
					</>
      )}
      {showResults && 
        <Results questions={questions}  selectNewQuizOptions={selectNewQuizOptions} />
      }
		</div>
	);
}

export default App;

// Add to React questions: https://www.dhiwise.com/post/the-complete-guide-to-detect-and-prevent-memory-leaks-in-react-js

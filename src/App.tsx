import { useState } from "react";

import { Quiz, Start } from "./pages/";
import {
  backendQuestions,
  expressQuestions,
  frontendQuestions,
  javascriptQuestions,
  reactQuestions,
  typescriptQuestions,
  restAPIQuestions
} from "./questions";
import styles from "./App.module.scss";
import { IQuestions, ITotalNumQuestions, Subject } from "./types/types";
import { Results } from "./pages/pages/Results";

function App() {
  const [questions, setQuestions] = useState<IQuestions[] | undefined>();
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const totalNumQuestions: ITotalNumQuestions = {
  Backend: backendQuestions.length,
  Express: expressQuestions.length,
  Frontend: frontendQuestions.length,
  JavaScript: javascriptQuestions.length,
  React: reactQuestions.length,
  "REST API": restAPIQuestions.length ,
  Typescript: typescriptQuestions.length,
}
  const updateQuestions = (subject: Subject, num: number) => {
    console.log('subject: ', subject)
    const _subject = Object.keys(subject);
    let _numSubjects = 0;
    _subject.forEach((_subject) => {
      if (subject[_subject as keyof Subject]) _numSubjects =_numSubjects + 1;
      return;
    })
    const newQuestions = [] as IQuestions[];
    // if (subject["Backend"]) {
    //   newQuestions.push(...questionGenerator(backendQuestions, num / _numSubjects));
    // };
    // if (subject["Express"]) {
    //   newQuestions.push(...questionGenerator(expressQuestions, num / _numSubjects));
    // };
    // if (subject["Frontend"]) {
    //   newQuestions.push(...questionGenerator(frontendQuestions, num / _numSubjects));
    // };
    // if (subject["JavaScript"]) {
    //   newQuestions.push(...questionGenerator(restAPIQuestions, num / _numSubjects));
    // };
    // if (subject.React) {
    //   newQuestions.push(...questionGenerator(reactQuestions, num / _numSubjects));
    // };
    // if (subject["REST API"]) {
    //   newQuestions.push(...questionGenerator(restAPIQuestions, num / _numSubjects));
    // };
    // if (subject.Typescript) {
    //   newQuestions.push(...questionGenerator(typescriptQuestions, num / _numSubjects));
    // };
    // Temp logic for quick testing
    console.log('subject: ', subject)
    if (subject["Backend"]) {
      newQuestions.push(...backendQuestions);
    };
    if (subject["Express"]) {
      newQuestions.push(...expressQuestions);
    };
    if (subject["Frontend"]) {
      newQuestions.push(...frontendQuestions);
    };
    if (subject["JavaScript"]) {
      newQuestions.push(...javascriptQuestions);
    };
    if (subject.React) {
      newQuestions.push(...reactQuestions);
    };
    if (subject["REST API"]) {
      newQuestions.push(...restAPIQuestions);
    };
    if (subject.Typescript) {
      newQuestions.push(...typescriptQuestions);
    };
    console.log('newQuestions: ', newQuestions)
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
    console.log('test')
    console.log(subject, num);
    updateQuestions(subject, num);
    setShowQuiz(true);
  };

  questionTracker();

	return (
		<div className={styles.appContainer}>
        {(!showQuiz && !showResults) &&
        <Start startNewQuiz={startNewQuiz} totalNumQuestions={totalNumQuestions}  />
        }
				
				{(showQuiz && !showResults) && (
					<>
          <Quiz
            selectNewQuizOptions={selectNewQuizOptions}
            questions={questions}
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


export const questionTracker = () => {
  console.log('# of TS questions: ', typescriptQuestions.length);
  console.log('TS easy questions: ', typescriptQuestions.filter((question) => question.level === 0).length);
  console.log('TS medium questions: ', typescriptQuestions.filter((question) => question.level === 1).length);
  console.log('TS hard questions: ', typescriptQuestions.filter((question) => question.level === 2).length);
  console.log('# of React questions: ', reactQuestions.length);
  console.log('React easy questions: ', reactQuestions.filter((question) => question.level === 0).length);
  console.log('React medium questions: ', reactQuestions.filter((question) => question.level === 1).length);
  console.log('React hard questions: ', reactQuestions.filter((question) => question.level === 2).length);
  console.log('# of JS questions: ', javascriptQuestions.length);
  console.log('JS easy questions: ', javascriptQuestions.filter((question) => question.level === 0).length);
  console.log('JS medium questions: ', javascriptQuestions.filter((question) => question.level === 1).length);
  console.log('JS hard questions: ', javascriptQuestions.filter((question) => question.level === 2).length);
  console.log('# of Frontend questions: ', frontendQuestions.length);
  console.log('Frontend easy questions: ', frontendQuestions.filter((question) => question.level === 0).length);
  console.log('Frontend medium questions: ', frontendQuestions.filter((question) => question.level === 1).length);
  console.log('Frontend hard questions: ', frontendQuestions.filter((question) => question.level === 2).length);
  console.log('# of Backend questions: ', backendQuestions.length);
  console.log('Backend easy questions: ', backendQuestions.filter((question) => question.level === 0).length);
  console.log('Backend medium questions: ', backendQuestions.filter((question) => question.level === 1).length);
  console.log('Backend hard questions: ', backendQuestions.filter((question) => question.level === 2).length);
  console.log('# of Express questions: ', expressQuestions.length);
  console.log('Express easy questions: ', expressQuestions.filter((question) => question.level === 0).length);
  console.log('Express medium questions: ', expressQuestions.filter((question) => question.level === 1).length);
  console.log('Express hard questions: ', expressQuestions.filter((question) => question.level === 2).length);
  console.log('# of REST API questions: ', restAPIQuestions.length);
  console.log('REST API easy questions: ', restAPIQuestions.filter((question) => question.level === 0).length);
  console.log('REST API medium questions: ', restAPIQuestions.filter((question) => question.level === 1).length);
  console.log('REST API hard questions: ', restAPIQuestions.filter((question) => question.level === 2).length);
 }
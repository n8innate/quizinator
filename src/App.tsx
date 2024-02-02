import { useState } from "react";

import { Quiz, Start } from "./pages/";
import { reactQuestions, typescriptQuestions } from "./questions";
import Logo from "./images/quizinator-logo.svg";
import { Button, Checkbox, Loader, Rater } from "./components/";
import styles from "./App.module.scss";

function App() {
	const [startNum, setStartNum] = useState(30);
	const [questions, setQuestions] = useState(typescriptQuestions);
	const [showAnswer, setShowAnswer] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(10);
	const [showQuiz, setShowQuiz] = useState(true);

	const updateQuestions = (questions: string) => {
		const questionTopic = {
			React: reactQuestions,
			Typescript: typescriptQuestions,
		};
		setQuestions(questionTopic[questions as keyof typeof questionTopic]);
	};

	const startNewQuiz = () => {
		setStartNum(0);
		setShowAnswer(false);
	};

	return (
		<div className={styles.appContainer}>
        {!showQuiz &&
          <Start />
        }
				
				{showQuiz && (
					<>
						<Quiz />
					</>
				)}
		</div>
	);
}

export default App;

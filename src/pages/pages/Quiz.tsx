import { useState } from "react";

import { reactQuestions, typescriptQuestions } from "../../questions";
import Logo from "../../images/quizinator-logo.svg";
import { Button, Checkbox, Loader, Rater } from "../../components";
import styles from "../../App.module.scss";

export const Quiz = () => {
	const [startNum, setStartNum] = useState(30);
	const [questions, setQuestions] = useState(typescriptQuestions);
	const [showAnswer, setShowAnswer] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(10);

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
			<div className={styles.appDashboard}>
				<img className={styles.appLogo} src={Logo} alt='quizinator logo' />				
				<div className={styles.appQuestion}>
					<h3>{questions[startNum].question}</h3>
				</div>
				<div className={styles.appButtons}>
					<Button
						displayText='previous'
						onClick={() => {
							setStartNum(startNum > 1 ? startNum - 1 : 0);
							setShowAnswer(false);
						}}
					/>
					<Button
						displayText='next'
						onClick={() => {
							setStartNum(startNum + 1);
							setShowAnswer(false);
						}}
					/>
				</div>
				<Button displayText='new quiz' onClick={() => startNewQuiz()} />
			</div>
			<div className={styles.appAnswerContainer}>
				{!showAnswer && (
					<>
						<Button
							displayText='Show Answer'
							onClick={() => {
								setShowAnswer(true);
							}}
						/>
						<Loader />
					</>
				)}
				{showAnswer && (
					<>
						<div className={styles.appAnswer}>{questions[startNum].answer}</div>
						<Rater />
					</>
				)}
			</div>
		</div>
	);
};

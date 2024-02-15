import { useState } from "react";

import Logo from "../../images/quizinator-logo.svg";
import { Button, Loader, Rater } from "../../components";
import styles from "../../App.module.scss";
import { IQuestions } from "../../types/types";

interface IQuizProps { 
  questions: IQuestions[];
  selectNewQuizOptions: () => void;
  setShowResults: (showResults: boolean) => void;
}

export const Quiz = (props: IQuizProps) => {
  const { questions, selectNewQuizOptions, setShowResults } = props;
	const [questionIdx, setQuestionIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const updateQuestionNumber = (direction: string) => {
    console.log('updateQuestionNumber', direction, questionIdx, questions.length - 1)
    if (questionIdx === questions.length - 1) {
      console.log('show results');
      setShowResults(true);
      return;
    };
    if (direction === 'previous') setQuestionIdx(questionIdx > 1 ? questionIdx - 1 : 0);
    if (direction === 'next') setQuestionIdx(questionIdx < questions.length ? questionIdx + 1 : questions.length -1);
    setShowAnswer(false);
  }

  const updatedQuestionRating = (rating: number) => {
    questions[questionIdx].rating = rating;
  }

	return (
		<div className={styles.appContainer}>
			<div className={styles.appDashboard}>
				<img className={styles.appLogo} src={Logo} alt='quizinator logo' />				
        {questionIdx < questions.length &&
          <>
            <div className={styles.appQuestion}>
              <h2>Question #{questionIdx + 1}</h2>
            <h3 className={styles.appTopic}>Topic: {questions[questionIdx].topic}</h3>
              <h3>{questions[questionIdx].question}</h3>
            </div>
            <div className={styles.appButtons}>
              <Button
                displayText='previous'
                onClick={() => {updateQuestionNumber('previous')}}
              />
              <Button
                displayText='next'
                onClick={() => {updateQuestionNumber('next')}}
              />
            </div>
          </>
        }
				<Button displayText='new quiz' onClick={() => selectNewQuizOptions()} />
			</div>
      {questionIdx < questions.length &&
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
						<div className={styles.appAnswer}>{questions[questionIdx].answer}</div>
              <Rater updatedQuestionRating={ updatedQuestionRating } />
					</>
				)}
      </div>
      }
		</div>
	);
};

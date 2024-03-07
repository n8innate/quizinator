import { useState } from "react";

import Logo from "../../images/quizinator-logo.svg";
import { Button, Loader, Rater } from "../../components";
import styles from "../../App.module.scss";
import { IQuestions } from "../../types/types";

interface IQuizProps { 
  questions: IQuestions[] | undefined;
  selectNewQuizOptions: () => void;
  setShowResults: (showResults: boolean) => void;
}


// Todo
  // Move rater into popup modul that fires on next question 
export const Quiz = (props: IQuizProps) => {
  const { questions, selectNewQuizOptions, setShowResults } = props;
	const [questionIdx, setQuestionIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const updateQuestionNumber = (direction: string) => {
    if (questions && questionIdx === questions.length - 1) {
      console.log('show results');
      setShowResults(true);
      return;
    };
    if (questions && direction === 'previous') setQuestionIdx(questionIdx > 1 ? questionIdx - 1 : 0);
    if (questions && direction === 'next') setQuestionIdx(questionIdx < questions.length ? questionIdx + 1 : questions.length -1);
    setShowAnswer(false);
  }

  const updatedQuestionRating = (rating: number) => {
    // questions && questions[questionIdx].rating = rating;
  }

	return (
		<div className={styles.appContainer}>
			<div className={styles.appDashboard}>
				<img className={styles.appLogo} src={Logo} alt='quizinator logo' />				
        {questions && questionIdx < questions.length &&
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
      {questions && questionIdx < questions.length &&
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
				{(questions && showAnswer) && (
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

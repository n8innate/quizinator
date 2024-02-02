import { useState } from 'react';

import { reactQuestions, typescriptQuestions } from '../../questions';
import Logo from '../../images/quizinator-logo.svg';
import { Button, Checkbox, Loader, Rater } from '../../components';
import styles from '../../App.module.scss';

export const Start = () => {
  const [startNum, setStartNum] = useState(30);
  const [questions, setQuestions] = useState(typescriptQuestions);
  const [showAnswer, setShowAnswer] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const updateQuestions = (questions: string) => { 
    const questionTopic = {
      React: reactQuestions,
      Typescript: typescriptQuestions
    }
    setQuestions(questionTopic[questions as keyof typeof questionTopic])
  }

  const startNewQuiz = () => {
    setStartNum(0)
    setShowAnswer(false)
  }
  
  return (
    <div className={styles.appContainer}>
      <div className={styles.appDashboard} >
        <img className={styles.appLogo} src={Logo} alt='quizinator logo' />
          <div className={styles.optionsContainer}>
            <h3>Choose a topic</h3>
            <Checkbox
              labelText="React" updateQuestions={updateQuestions}
            />
            <Checkbox
              labelText="Typescript" updateQuestions={updateQuestions}
            />
            <h3>How many questions do you want?</h3>
            <div className={styles.optionsSlider}>
              <input
                type="range"            
                min='0'
                max={questions.length}
                onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                value={numberOfQuestions}
              />
              {numberOfQuestions}
            </div>

            <Button displayText='quiz me!' onClick={() => setShowQuiz(true)} />
        </div>
      </div>
    </div>
  );
}

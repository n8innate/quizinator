import { useState } from 'react';

import Logo from '../../images/quizinator-logo.svg';
import { Button, Checkbox } from '../../components';
import { IStartProps, Subject } from '../../types/types';
import styles from '../../App.module.scss';



export const Start = (props: IStartProps) => {
  const { startNewQuiz } = props;
  const [subject, setSubject] = useState<Subject>(
    {
      Frontend: false,
      JavaScript: false,
      React: false,
      "REST API": false,
      Typescript: false,
    }
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  
  const updateQuestions = (newSubject: string, checked: boolean) => { 
    console.log('new Subject: ', newSubject)
    console.log('checked: ', checked)
    setSubject({...subject, [newSubject]: checked})
  }
  
  return (
    <div className={styles.appContainer}>
      <div className={styles.appDashboard} >
        <img className={styles.appLogo} src={Logo} alt='quizinator logo' />
          <div className={styles.optionsContainer}>
            <h3>Choose a Subject</h3>
            <Checkbox
              labelText="JavaScript" updateQuestions={updateQuestions}
            />
            <Checkbox
              labelText="React" updateQuestions={updateQuestions}
            />
            <Checkbox
              labelText="REST API" updateQuestions={updateQuestions}
            />
            <Checkbox
              labelText="Typescript" updateQuestions={updateQuestions}
            />
            <h3>How many questions do you want?</h3>
            <div className={styles.optionsSlider}>
              <input
                type="range"            
                min='0'
                max={50}
                onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                value={numberOfQuestions}
              />
              {numberOfQuestions}
            </div>

          <Button displayText='quiz me!' onClick={() => {
            console.log('start page: ',subject, numberOfQuestions)
            startNewQuiz(subject, numberOfQuestions)
          }} />
        </div>
      </div>
    </div>
  );
}

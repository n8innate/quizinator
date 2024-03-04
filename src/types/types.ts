import { ReactNode } from 'react';


export interface IQuestions {
  rating: number;
  subject: 'backend' | 'frontend' | 'javascript' | 'react' | 'restapi' | 'typescript';
  topic: string;
  level: 0 | 1 | 2; // 0 = easy, 1 = medium, 2 = hard
  question: string | ReactNode;
  answer: ReactNode;
}

export interface ICheckboxProps {
  labelText: string;
  updateQuestions: (questons: string, checked: boolean) => void;
}

export interface IButtonProps {
  displayText: string;
  onClick: () => void;
}

export interface IStartProps { 
  startNewQuiz: (subject: Subject, num: number) => void;
}

export type Subject = {
  Backend: boolean;
  Frontend: boolean;
  JavaScript: boolean;
  React: boolean;
  "REST API": boolean;
  Typescript: boolean;
};
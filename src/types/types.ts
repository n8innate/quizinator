import { ReactNode } from 'react';


export interface IQuestions {
  rating: 0 | 1 | 2 | null; // 0 = no clue, 1 = got some, missed some, 2 = knew all of it, null = not rated;
  subject: 'backend' | 'express' |  'frontend' | 'javascript' | 'react' | 'restapi' | 'typescript';
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

export interface ITotalNumQuestions {
  Backend: number;
  Express: number;
  Frontend: number;
  JavaScript: number;
  React: number;
  "REST API": number;
  Typescript: number;
}

export interface IStartProps { 
  startNewQuiz: (subject: Subject, num: number) => void;
  totalNumQuestions: ITotalNumQuestions;
}

export type Subject = {
  Backend: boolean;
  Express: boolean;
  Frontend: boolean;
  JavaScript: boolean;
  React: boolean;
  "REST API": boolean;
  Typescript: boolean;
};
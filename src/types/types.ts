import { ReactNode } from 'react';

export interface IQuestions {
  topic: string;
  question: string;
  answer: ReactNode;
}

export interface ICheckboxProps {
  labelText: string;
  updateQuestions: (questons: string) => void;
}

export interface IButtonProps {
  displayText: string;
  onClick: () => void;
}
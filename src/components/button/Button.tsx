import { IButtonProps } from "../../types/types";

import styles from "./Button.module.scss";


export const Button = ({ ...props }: IButtonProps) => {
  const { displayText, onClick} = props;
  return (
    <button
      className={styles.appButton}
      onClick={onClick}
    >
      <p>{displayText}</p>
    </button>
  );
}
import { PropsWithChildren, useState } from 'react';
import { ICheckboxProps } from '../../types/types';
import styles from './Checkbox.module.scss';



export const Checkbox = (props: PropsWithChildren<ICheckboxProps>) => {
  const { labelText, updateQuestions } = props;
  const [checked, setChecked] = useState(false);
  const checkboxIcon = 
  <>
    <svg viewBox="0 0 64 64" >
      <path
        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
        pathLength="575.0541381835938">          
      </path>
    </svg>
    </>
  
  const onCheckboxChange = () => {
    updateQuestions(labelText, !checked)
    setChecked(!checked)
  }

  return (
    <div className={styles.checkboxContainer}>
      <input
        type='checkbox'
        id={labelText}
        checked={checked}
        onChange={onCheckboxChange}
      />
      <label htmlFor={labelText} >
        {checkboxIcon}
        <span className={styles.labelText}>{labelText}</span>
      </label>
    </div>
)

}
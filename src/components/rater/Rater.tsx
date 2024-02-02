import styles from './Rater.module.scss';
export const Rater = () => { 

  const options = ['No clue', 'Missed most', 'Missed a little', 'Got it down']
  return (
    <div className={styles.raterContainer}>
      <h3>How well did you know this answer?</h3>
      <form>
        {options.map((option, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
              />
              <span className={styles.ratingText}>{option}</span>
            </label>
          ) 
        }
        )}
      </form>
    </div>
  )
};
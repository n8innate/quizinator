import styles from './Rater.module.scss';

interface IRatingProps {
  updatedQuestionRating: (rating: number) => void;
};

export const Rater = (props: IRatingProps) => { 
  const { updatedQuestionRating } = props;
  const options = ['No clue', 'Got some, missed some', 'Knew all of it!']
  return (
    <div className={styles.raterContainer}>
      <h3>How well did you know this answer?</h3>
      <form>
        {options.map((option, i) => {
          const ratingValue = i;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onChange={() => updatedQuestionRating(ratingValue)}
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
import Logo from '../../images/quizinator-logo_only.svg'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div><img src={Logo} alt='quizinator logo' /></div>
    </div>
  )
}
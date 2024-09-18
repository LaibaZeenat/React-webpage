import styles from './Button.module.css'


const Button = ({isoutline, icon, text}) => {
  return (
    <div className={isoutline? styles.isoutline_btn : styles.primary_btn}>
      {icon}
      {text}
    </div>
  )
}

export default Button

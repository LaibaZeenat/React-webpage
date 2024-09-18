import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.nav} container`}>
        <div className="logo">
          <img src="/images/logoo.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navigation  

import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
    
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<img src="/images/ic_outline-message.png"/>}/>
      <Button text="VIA CALL" icon={<img src="/images/Vector.png"/>}/>
      </div>
      <Button isoutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>
    <form>
      <div className={styles.form_control}>
        <label htmlFor="">Name</label>
        <input type="text"/>
      </div>
      <div className={styles.form_control}>
        <label htmlFor="">E-Mail</label>
        <input type="text"/>
      </div>
      <div className={styles.form_control}>
        <label htmlFor="">TEXT</label>
        <textarea type="text" rows={7}/>
      </div>
      <div className={styles.butn}>
     <Button text="SUBMIT"/>
     </div>
    </form>
    </div>
    <div className={styles.contact_image}>
      <img src="/images/main.png" alt="" />
    </div>
  </section>
  )
}

export default ContactForm

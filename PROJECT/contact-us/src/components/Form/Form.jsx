import { useState } from "react";
import styles from "./Form.module.css";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Form = () => {

const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [text, setText] = useState('')

const onSubmit = (e) =>{
e.preventDefault()

// setUser(e.target[0].value)
// setEmail(e.target[1].value)
// setText(e.target[2].value)

setUser(e.target.name.value)
se
}

  return (
    <div className={styles.container}>
      <div>
        <div  className={styles.btns}>
          <div className={styles.btn1}>
            <button>{<IoCall />} By Call</button>
            <button>{<MdMessage />} By Message</button>
          </div>
          <div className={styles.btn2}>
            <button>{<CiMail />} By Email</button>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" id=""></textarea>
            </div>
            <div className={styles.submit}>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
          <div>
            Name: {user} <br />
            Email: {email} <br />
            Text: {text}
          </div>
        </div>
      </div>
      <div>
        <img src="/contact.jpg" alt="" />
      </div>
    </div>
  );
};

export default Form;

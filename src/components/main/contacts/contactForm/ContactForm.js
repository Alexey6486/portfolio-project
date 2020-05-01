import React from "react";
import styles from './style.module.css'

function ContactForm() {
    return (
        <div className={styles.contactsFormWrap}>
            <form className={styles.contactsForm} action="#">
                <div className={styles.contactsForm__group}>
                    <input type="text" required/>
                    <label htmlFor="contactsForm__input">Ваше имя</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="email" required/>
                    <label htmlFor="contactsForm__input">Ваш e-mail</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="number" required/>
                    <label htmlFor="contactsForm__input">Ваш телефон</label>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.textareaGroup}`}>
                    <textarea placeholder="Ваше сообщение"></textarea>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.submitGroup}`}>
                    <button type="submit">Отправить форму</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
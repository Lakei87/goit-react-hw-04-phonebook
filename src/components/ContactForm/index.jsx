import Proptypes from 'prop-types';
import { useState } from 'react';
import styles from './contactForm.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.contactForm} name="phoneBook" onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    className={styles.contactForm__input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone
                <input
                    className={styles.contactForm__input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button
                className={styles.contactForm__btn}
                type="submit">
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: Proptypes.func.isRequired,
};
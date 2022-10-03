import PropTypes from 'prop-types';
import styles from './contactItem.module.css';

export default function ContactItem({name, number, onBtnClick}) {
    return (
        <li className={styles.contactList__item}>
            <p className={styles.contactList__name}>{name}:</p>
            <p className={styles.contactList__number}>{number}</p>
            <button
                className={styles.contactList__btn}
                type="button"
                onClick={onBtnClick}
            >
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired,
}
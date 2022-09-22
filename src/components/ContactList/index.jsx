import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem";
import styles from './contactList.module.css';

const ContactList = ({ contacts, onBtnClick }) => {
    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => {
                return <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onBtnClick={() => onBtnClick(id)}
                />
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),),
};

export default ContactList;
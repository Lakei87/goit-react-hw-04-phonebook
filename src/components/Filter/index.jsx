import PropTypes from 'prop-types';
import styles from './filter.module.css';

export default function Filter({onChange, value}) {
    return (
        <label>
            Find contacts by name
            <input
                className={styles.filter}
                type="text"
                onChange={onChange}
                value={value}
            />
        </label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
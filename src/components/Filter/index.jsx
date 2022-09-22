import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ onChange, value }) => {
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
    )
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default Filter;
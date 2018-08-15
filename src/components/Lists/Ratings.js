import React from 'react';
import * as styles from './styles.css';
const Ratings = ({rating, popularity}) => {
    return (
        <div className={styles.ratings}>
            <span>Popularity - {popularity}</span>
            <span>{rating} - Rating</span>
        </div>
    );
};

export default Ratings;

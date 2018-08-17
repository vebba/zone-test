import React from 'react';
import * as styles from "../Lists/ListMovieItem.css";

const Poster = ({url}) => (
    <div className={styles.poster}>
        <figure style={{backgroundImage: `url("${url}")`, ...styles}}/>
    </div>
);

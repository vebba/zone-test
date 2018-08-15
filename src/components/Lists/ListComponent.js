import React from 'react';
import * as styles from "./ListComponent.css";
import ListMovie from "./ListMovie";

const ListComponent = ({genres, items}) => {
    return (
        items.length ?
            <div className={styles.list}>
                <ListMovie items={items} genres={genres}/>
            </div>
            :
            <div className={styles.noResults}>No movies for matching criteria</div>


    )
};


export default ListComponent;

import React from 'react';
import styles from "./styles.css";
import ListMovie from "./ListMovie";

const ListComponent = ({genres,items}) => {
    return (
            <div className={styles.list}>
                {items.length ?
                    <ListMovie items={items} genres={genres} />
                    :
                    <div className={styles.noResults}>No movies for matching criteria</div>
                }
            </div>
    )
};


export default ListComponent;

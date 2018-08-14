import React from 'react';
import styles from "./styles.css";
import ListMovie from "./ListMovie";

const ListComponent = ({genres,items}) => {
    console.log(items);
    return (
            <div className={styles.list}>
                {items.length ?
                    <ListMovie items={items} genres={genres} />
                    :
                    <div className={styles.noResults}>No Results</div>
                }
            </div>
    )
};


export default ListComponent;

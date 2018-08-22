import React from 'react';
import * as styles from "./ListComponent.css";
import ListMovie from "./ListMovie";

const ListComponent = ({genres, items}) => {
    return (
        items.length ?
            <div className="w3-padding">
                <ListMovie items={items} genres={genres}/>
            </div>


            :
            <div className={`${styles.noResults} w3-display-container`}>
                <span className="w3-display-middle w3-xlarge">No movies for matching criteria</span>
            </div>


    )
};


export default ListComponent;

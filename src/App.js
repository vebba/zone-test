import React from 'react';
import * as styles from './App.css';
import ListComponent from './components/ListContainer';
import Genres from "./components/Genres";
import PopularityFilter from "./components/PopularityFilter";

export const App = () => (
    <div className={styles.App}>
        <div className={styles.AppSideBar}>
            <PopularityFilter/>
            <Genres/>
        </div>


        <ListComponent/>
    </div>
);



import React from 'react';
import * as styles from './App.css';
import {Genres} from "./components/GenreSelector";
import {PopularityFilter, ListComponent, Header} from "./components";
import {MenuIcon} from "./components/Icons";

export const App = () => (
    <div className={styles.App}>
        <Header>
            <Genres/>
            <PopularityFilter/>
            <MenuIcon/>

        </Header>
        <ListComponent/>
    </div>
);



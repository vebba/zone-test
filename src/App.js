import React from 'react';
import * as styles from './App.css';
import {Genres} from "./components/GenreSelector";
import {PopularityFilter, ListComponent, Header} from "./components";
import {MenuIcon} from "./components/Icons";
import SimpleButton from "./components/Buttons/SimpleButton";

export const App = () => (
    <div className={styles.App}>
        <Header>
            <Genres/>
            <PopularityFilter/>
            <SimpleButton buttonType="MENU_OPEN">
                <MenuIcon/>
            </SimpleButton>
        </Header>
        <ListComponent/>
    </div>
);



import React from 'react';
import {Genres} from "./components/GenreSelector";
import {PopularityFilter, ListComponent, Header} from "./components";
import SideBar from "./components/SideBars/SideBar";
import Pagination from "./components/Pagination/Pagination";

export const App = () => (
    <div>
        <SideBar>
            <Pagination/>
            <PopularityFilter/>
            <Genres/>
        </SideBar>

        {/*    <Genres/>
            <PopularityFilter/>
            <SimpleButton buttonType="MENU_OPEN">
                <MenuIcon/>
            </SimpleButton>*/}
            <div className="w3-main" style={{marginLeft: "200px"}}>
                <Header/>
                <ListComponent/>


            </div>



        </div>
);



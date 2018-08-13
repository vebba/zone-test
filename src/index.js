import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
//import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import createStore from './store/configureStore';
import {initStore} from "./store";

const store = createStore;
const rootElement = document.getElementById('root');

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
                    <Component/>
        </Provider>,
        rootElement
    );
}
//registerServiceWorker();

//start the app
initStore(store.dispatch)
    .then(() => render(App))
    .catch(error => console.error(error));




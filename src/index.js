import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import createStore from './store/configureStore';
import {initStore} from "./store";
import {initListeners} from "./listeners/initListenres";

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

registerServiceWorker();

initListeners(store.dispatch);


//start the app
initStore(store.dispatch)
    .then(() => render(App))
    .catch(error => console.error(error));

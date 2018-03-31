import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import 'materialize-css/js/animation.js'
import 'materialize-css/js/cards.js'
import toDos from './reducers/reducers.js'
const store = createStore(toDos,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

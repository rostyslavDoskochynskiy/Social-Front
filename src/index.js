import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { storeConfigs } from './store'
import 'antd/dist/antd.css';

const app = storeConfigs(<App/>);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

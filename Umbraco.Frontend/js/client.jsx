import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

// Expose loader does not offer syntax to expose ES6 modules in a good way
// Instead we access webpack's internal way of globalizing modules
//
// https://github.com/webpack-contrib/expose-loader/issues/43
global['React']    = React;
global['ReactDOM'] = ReactDOM;

const Routing = () => (
    <Router>
        <App />
    </Router>
);

// We could also wrap this module with a new base file and require+expose this module from there
// Instead we shortcut and access webpack's internal way of globalizing modules
global['Routing'] = Routing;

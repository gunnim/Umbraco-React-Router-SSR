import { StaticRouter as Router } from 'react-router';

import App from './app';

const Routing = ({ path, context }) => (
    <Router
        location={path}
        context={context}
    >
        <App />
    </Router>
);

// We could also wrap this module with a new base file and require+expose this module from there
// Instead we shortcut and access webpack's internal way of globalizing modules
global['Routing'] = Routing;
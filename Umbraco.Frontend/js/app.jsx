/* ===============
 *  React Routing
 * =============== */

import * as React from 'react';
import { 
    Route,
    Switch,
    Redirect,
} from 'react-router';
import { Link } from 'react-router-dom';

const Head     = () => 
  <header>
    <h3>Header</h3>
    <ul>
      <li><Link to="/">One</Link></li>
      <li><Link to="/two">Two</Link></li>
      <li><Link to="/three">
        301 - Copy this link, navigate from browser bar and watch the network log in your developer console
      </Link></li>
      <li><Link to="/four">302 - same as above</Link></li>
      <li><Link to="/thispagedoesnotexist">404 - same as above</Link></li>
    </ul>
  </header>
;

const One      = () => <p>One</p>;
const Two      = () => <p>Two</p>;

const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    if (staticContext)
      staticContext.status = status
    return <Redirect from={from} to={to}/>
  }}/>
)

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

const App = () => (
    <div>
        <Head />
        <Switch>
            <Route exact path="/" component={One} />
            <Route path="/two" component={Two} />
            <RedirectWithStatus
              status={301}
              from="/three"
              to="/two"
            />
            <RedirectWithStatus
              status={302}
              from="/four"
              to="/two"
            />
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;

/* ===============
 *  React Routing
 * =============== */

import * as React from 'react';
import { 
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router';

const Head     = () => <header>Header</header>;

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

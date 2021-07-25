import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';

import PrivateRoute from "./page/firebase/auth/PrivateRoute";
import { AuthProvider } from "./page/firebase/auth/AuthProvider";
import Home from "./page/firebase/components/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
         <Switch>
           <PrivateRoute exact path="/react-pages/home" component={Home} />
             {routes.map((route, idx) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={idx}
                />
             ))}
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default withRouter(App);

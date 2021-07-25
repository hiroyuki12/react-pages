import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';

import PrivateRoute from "./page/firebase/auth/PrivateRoute";
import { AuthProvider } from "./page/firebase/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
         <Switch>
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

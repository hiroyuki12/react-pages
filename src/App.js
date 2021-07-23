import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
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
  );
}

export default withRouter(App);

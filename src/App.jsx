import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';
import './QiitaApp.css';

import PrivateRoute from "./page/firebase/auth/PrivateRoute";
import { AuthProvider } from "./page/firebase/auth/AuthProvider";
import Home 	    from "./page/firebase/components/Home";
import Index 	    from "./page/firestore/Index";
import Add 	    from "./page/firestore/Add";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
         <Switch>
           <PrivateRoute exact path="/react-pages/home" component={Home} />
           <PrivateRoute exact path="/react-pages/index" component={Index} />
           <PrivateRoute exact path="/react-pages/add" component={Add} />
             {routes.map((route, idx) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={idx}
                />
             ))}
          </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default withRouter(App);

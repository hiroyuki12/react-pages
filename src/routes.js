import Main from './page/main';
import One from './page/one';
import Todomatic from './page/todomatic/todomatic';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/one', component: One},
    { path: '/react-pages/todomatic', component: Todomatic},
  ];
  
  export default routes;

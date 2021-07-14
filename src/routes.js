import One from './page/one';
import Main from './page/main';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/one', component: One},
  ];
  
  export default routes;

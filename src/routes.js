import Main from './page/main';
import One from './page/one';
import Todomatic from './page/todomatic/todomatic';
import Qiita from './page/qiita/index';
import Simpletodo from './page/simpletodo/App';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/one', component: One},
    { path: '/react-pages/todomatic', component: Todomatic},
    { path: '/react-pages/qiita', component: Qiita},
    { path: '/react-pages/simpletodo', component: Simpletodo},
  ];
  
  export default routes;

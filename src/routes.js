import Main from './page/main';
import One from './page/one';
import Todomatic from './page/todomatic/todomatic';
import Qiita from './page/qiita/index';
import Simpletodo from './page/simpletodo/App';
import Todolist from './page/todolist/App';
import Counter from './page/counter/counter';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/one', component: One},
    { path: '/react-pages/todomatic', component: Todomatic},
    { path: '/react-pages/qiita', component: Qiita},
    { path: '/react-pages/simpletodo', component: Simpletodo},
    { path: '/react-pages/todolist', component: Todolist},
    { path: '/react-pages/counter', component: Counter},
  ];
  
  export default routes;

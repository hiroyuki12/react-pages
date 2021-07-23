import Main from './page/main';
import Blog from './page/blog/index';
import One from './page/one';
import Todomatic from './page/todomatic/todomatic';
import Qiita from './page/qiita/index';
import QiitaSwift from './page/qiita/swift';
import Simpletodo from './page/simpletodo/App';
import Todolist from './page/todolist/App';
import Counter from './page/counter/counter';
import Tweet from './page/tweet/App';
import Clock from './page/clock/App';
import Test from './page/auth/Test';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/blog', component: Blog},
    { path: '/react-pages/one', component: One},
    { path: '/react-pages/todomatic', component: Todomatic},
    { path: '/react-pages/qiita', component: Qiita},
    { path: '/react-pages/qiitaswift', component: QiitaSwift},
    { path: '/react-pages/simpletodo', component: Simpletodo},
    { path: '/react-pages/todolist', component: Todolist},
    { path: '/react-pages/counter', component: Counter},
    { path: '/react-pages/tweet', component: Tweet},
    { path: '/react-pages/clock', component: Clock},
    { path: '/react-pages/test', component: Test},
  ];
  
  export default routes;

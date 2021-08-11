import Main from './page/Main';
import Sub from './page/Sub';
import Blog from './page/blog/Blog';
import One from './page/One';
import DogImage from './page/dogimage/DogImage';
import Todomatic from './page/todomatic/Todomatic';
import QiitaClass from './page/qiita/QiitaClass';
import Qiita from './page/qiita/Qiita';
import QiitaSwift from './page/qiita/QiitaSwift';
import Zenn from './page/zenn/Zenn';
import ZennBooksTrend from './page/zenn/ZennBooksTrend';
import Mstdn from './page/mstdn/Mstdn';
import Feedly from './page/feedly/Feedly';
import Teratail from './page/teratail/Teratail';
import StackOverFlow from './page/stackoverflow/StackOverFlow';
import Simpletodo from './page/simpletodo/SimpleTodo';
import MyTodoList from './page/todolist/MyTodoList';
import Counter from './page/counter/Counter';
import Tweet from './page/tweet/Tweet';
import MyClock from './page/clock/MyClock';
import TestNavbar from './page/auth/TestNavbar';
import Home from './page/firebase/components/Home';
import Login from './page/firebase/auth/Login';
import SignUp from './page/firebase/auth/SignUp';
import Add from './page/firestore/Add';
import Index from './page/firestore/Index';
import LoginGithub from './page/firebase/auth/LoginGithub';
import LoginSpotify from './page/spotify/LoginSpotify';
import SpotifyApp from './page/spotify/SpotifyApp';
import ChartApp from './page/chart/ChartApp';

const routes = [
    { path: '/react-pages/', component: Main, exact : true},
    { path: '/react-pages/main', component: Main},
    { path: '/react-pages/sub', component: Sub},
    { path: '/react-pages/blog', component: Blog},
    { path: '/react-pages/one', component: One},
    { path: '/react-pages/dogimage', component: DogImage},
    { path: '/react-pages/todomatic', component: Todomatic},
    { path: '/react-pages/qiitaclass', component: QiitaClass},
    { path: '/react-pages/qiita', component: Qiita},
    { path: '/react-pages/qiitaswift', component: QiitaSwift},
    { path: '/react-pages/zenn', component: Zenn},
    { path: '/react-pages/zennbookstrend', component: ZennBooksTrend},
    { path: '/react-pages/mstdn', component: Mstdn},
    { path: '/react-pages/feedly', component: Feedly},
    { path: '/react-pages/teratail', component: Teratail},
    { path: '/react-pages/stackoverflow', component: StackOverFlow},
    { path: '/react-pages/simpletodo', component: Simpletodo},
    { path: '/react-pages/todolist', component: MyTodoList},
    { path: '/react-pages/counter', component: Counter},
    { path: '/react-pages/tweet', component: Tweet},
    { path: '/react-pages/clock', component: MyClock},
    { path: '/react-pages/testnavbar', component: TestNavbar},
    { path: '/react-pages/home', component: Home},
    { path: '/react-pages/login', component: Login},
    { path: '/react-pages/signup', component: SignUp},
    { path: '/react-pages/add', component: Add},
    { path: '/react-pages/index', component: Index},
    { path: '/react-pages/logingithub', component: LoginGithub},
    { path: '/react-pages/loginspotify', component: LoginSpotify},
    { path: '/react-pages/spotifyapp', component: SpotifyApp},
    { path: '/react-pages/chart', component: ChartApp},
  ];
  
export default routes;

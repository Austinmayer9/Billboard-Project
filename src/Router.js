import { createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home/Home.vue';
import Board from './components/Board/Board.vue';
import About from './components/About/About.vue';
import SignIn from './components/SignIn/SignIn.vue';


const routes = [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
      },
      {
        path: '/Board',
        name: 'Board',
        component: Board
      },
      {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;
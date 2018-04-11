import AppRoot from './components/app_root.jsx';
import Home from './components/home/index.jsx';
import List from './components/list/index.jsx';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/list/:listId',
        component: List,
      },
    ],
  },
];

export default routes;

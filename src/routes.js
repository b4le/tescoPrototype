import AppRoot from './components/app_root.jsx';
import ListView from './containers/list_view/index.jsx';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: ListView,
      },
      {
        path: '/list/:listId',
        component: ListView,
      },
    ],
  },
];

export default routes;

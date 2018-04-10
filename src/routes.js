import AppRoot from './components/app_root';
import Home from './components/home';
import List from './components/list';

const routes = [
    {   
        component: AppRoot,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/list/:listId',
                component: List
            }
        ]
    }
];

export default routes;
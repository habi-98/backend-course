import MainLayouts from "../layouts/MainLayouts";

const routes = [
    {
        path: '/',
        component: () => MainLayouts,
        children: [
            {path: '', component: () => import('../components/HelloWorld')},
            {path: 'categories', component: () => import('../components/HelloWorld')},
        ]
    },

];

export default routes
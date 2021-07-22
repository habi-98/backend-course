import VueRouter from 'vue-router'
import MainLayouts from "../layouts/MainLayouts";


export default  new VueRouter({
    routes: [
        {
            path: '/',
            component: () => MainLayouts,
            children: [
                {path: '', component: () => import('../components/HelloWorld')},
                {path: 'categories', component: () => import('../components/HelloWorld')},
            ]
        },

]
});



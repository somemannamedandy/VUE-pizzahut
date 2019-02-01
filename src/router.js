import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Blog from './views/Blog';

Vue.use(Router);

const router =new Router({
    routes: [{
        path:'/home',
        component:Home
    },
        {
            path:'/blog',
            component:Blog
        }
    ]
});

export default router;
const routers = [
    {
        path: '/',
        meta: {
            title: 'index page'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/page1',
        meta: {
            title: 'page1'
        },
        component: (resolve) => require(['./views/page1.vue'], resolve)
    },
    {
        path: '/page2',
        meta: {
            title: 'page2'
        },
        component: (resolve) => require(['./views/page2.vue'], resolve)
    }
];
export default routers;
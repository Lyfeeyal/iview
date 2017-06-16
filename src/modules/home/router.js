const routers = [
    {
        path: '/home-index',
        meta: {
            title: 'home module'
        },
        component: (resolve) => require(['../../modules/home/index.vue'], resolve)
    },
    {
        path: '/home-index/page1',
        meta: {
            title: 'home module page1'
        },
        component: (resolve) => require(['../../modules/home/templates/page1.vue'], resolve)
    }
];



export default routers;
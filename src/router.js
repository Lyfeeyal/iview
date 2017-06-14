import routerConfig from './config.js';
console.log(routerConfig);

const routers = [];

for (let i = 0; i < routerConfig.length; i++) {
    routers.push(routerConfig[i]);
}

export default routers;
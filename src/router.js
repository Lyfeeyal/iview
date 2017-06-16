import routerConfig from './config.js';
import homeRouter from './modules/home/router.js';

const routerArr=[routerConfig,homeRouter];
const routers = [];

for(let arrIndex=0;arrIndex<routerArr.length;arrIndex++){

    for (let i = 0; i < routerArr[arrIndex].length; i++) {
        routers.push(routerArr[arrIndex][i]);
    }
}

export default routers;
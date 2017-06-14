let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    console.log(title);
    window.document.title = title;
};

export default util;
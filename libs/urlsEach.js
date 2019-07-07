const _ = require("lodash");

const urlsEach = (link, cb) => {
    if (_.isString(link.url)) {
        cb(link);
    } else {
        link.url.forEach((v, i) => {
            let _link = [].concat(link);
            _link.url = v;
            cb(_link);
        });
    }
};

exports = module.exports = urlsEach;
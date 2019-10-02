const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalneme);
            const name = path.basename(file.originalneme, ext);
            //console.log(path.extname(file.originalneme != undefined ? file.originalneme : ""));
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};
const path = require('path')

module.exports = {
    images: {
        // loader: 'cloudinary',
        // domains: ['res.cloudinary.com/'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
};
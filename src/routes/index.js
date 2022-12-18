const newRouter = require('./news')
const siteRouter = require('./site')


const route = (app) => {
   
    app.use('/news', newRouter)

    app.use('/', siteRouter)

    //  req là request : Chứa những thông tin mà client yêu cầu lên sever 
    //  res là response : Tùy chỉnh response trả vè cái gì

    // Local host ----- Hosting
    // Action ---> Dispatcher -----> Function handler
}


module.exports = route
"use strict";
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const {router, controller, middleware} = app;
    /**
     * 中间层
     * authMiddleware 验证token
     */
    const authMiddleware = middleware.auth(); // "auth" 是中间件的名称，这里是将中间件应用于所有路由
    /**
     * 路由表
     */
    router.post("/api/login", controller.login.index); // 登录接口的路由
    router.post("/api/checkToken", controller.checkToken.index); // 验证token是否过期的路由
    router.post("/api/update", authMiddleware, controller.update.index) // 上传文件
    router.post('/api/addNews', authMiddleware, controller.news.add) // 新增新闻
    router.get('/api/getNews', authMiddleware, controller.news.get) // 获取新闻
    router.delete('/api/delNews', authMiddleware, controller.news.del) // 删除新闻
    router.post('/api/editNews', authMiddleware, controller.news.edit) // 编辑新闻
    router.post('/api/addQualification', authMiddleware,controller.qualification.add) // 新增资质
    router.get('/api/getQualification', authMiddleware,controller.qualification.get) // 获取资质
    router.delete('/api/delQualification', authMiddleware,controller.qualification.del) // 删除资质
    router.post('/api/editQualification', authMiddleware,controller.qualification.edit) // 编辑资质
    router.post('/api/addVideo', authMiddleware,controller.video.add) // 新增视频
    router.get('/api/getVideo', authMiddleware,controller.video.get) // 获取视频
    router.delete('/api/delVideo', authMiddleware,controller.video.del) // 删除视频
    router.post('/api/editVideo', authMiddleware,controller.video.edit) // 编辑视频
    router.get('/api/getAbout', authMiddleware,controller.about.get) // 获取关于我们
    router.post('/api/editAbout', authMiddleware,controller.about.edit) // 编辑关于我们
    router.post('/api/addProduct', authMiddleware,controller.product.add) // 新增产品
    router.get('/api/getProduct', authMiddleware,controller.product.get) // 获取产品列表
    router.delete('/api/delProduct', authMiddleware,controller.product.del) // 删除产品
    router.post('/api/editProduct', authMiddleware,controller.product.edit) // 编辑产品
    router.post('/api/addBanner', authMiddleware,controller.banner.add) // 新增banner
    router.get('/api/getBanner', authMiddleware,controller.banner.get) // 获取banner列表
    router.delete('/api/delBanner', authMiddleware,controller.banner.del) // 删除banner
    router.post('/api/editBanner', authMiddleware, controller.banner.edit) // 编辑banner
};

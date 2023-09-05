import http from "./http.js";

export default {
    // 获取banner
    getBanner: () => {
        return http({
            url: "/pc/api/getBanner",
            method: "get",
        })
    },
    // 获取新闻
    getNews: (id = '') => {
        return http({
            url: "/pc/api/getNews?id=" + id,
            method: "get",
        })
    },
    // 编辑新闻
    editNews: (data) => {
        return http({
            url: "/pc/api/editNews",
            method: "post",
            data
        })
    },
    // 获取产品
    getProduct: (id = '') => {
        return http({
            url: "/pc/api/getProduct?id=" + id,
            method: "get",
        })
    },
    // 编辑产品
    editProduct: (data) => {
        return http({
            url: "/pc/api/editProduct",
            method: "post",
            data
        })
    },
    // 获取资质
    getQualification: () => {
        return http({
            url: "/pc/api/getQualification",
            method: "get",
        })
    },
    // 编辑资质
    editQualification: (data) => {
        return http({
            url: "/pc/api/editQualification",
            method: "post",
            data
        })
    },
    // 获取视频
    getVideo: () => {
        return http({
            url: "/pc/api/getVideo",
            method: "get",
        })
    },
    editVideo: (data) => {
        return http({
            url: "/pc/api/editVideo",
            method: "post",
            data
        })
    },
    // 获取关于我们
    getAbout: () => {
        return http({
            url: "/pc/api/getAbout",
            method: "get",
        })
    }
}
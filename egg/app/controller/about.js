"use strict";
const {Controller} = require('egg');

class AboutController extends Controller {
    tableName = "about";
    async get() {
        const {ctx} = this;
        const {id} = ctx.query;
        const result = await ctx.service.get.index(id, this.tableName);
        if (result) {
            ctx.body = {
                code: 0,
                msg: "获取成功",
                data: result
            };
        } else {
            ctx.body = {
                code: 1,
                msg: "获取失败"
            };
        }
    }
    async edit() {
        const {ctx} = this;
        let data = ctx.request.body;
        const result = await ctx.service.edit.index(data, this.tableName);
        if (result) {
            ctx.body = {
                code: 0,
                msg: "更新成功"
            };
        } else {
            ctx.body = {
                code: 1,
                msg: "更新失败"
            };
        }
    }
}
module.exports = AboutController;
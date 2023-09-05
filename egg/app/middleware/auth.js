module.exports = () => {
    return async function authMiddleware(ctx, next) {
        const token = ctx.headers.authorization; // 获取请求头中的 Authorization 字段
        const jwt = require("jsonwebtoken");
        if (token) {
            try {
                // 验证token
                const decoded = jwt.verify(token, "lapland");
                await next()
            } catch (err) {
                ctx.body = {
                    error: 1,
                    message: "token不合法",
                };
            }
        } else {
            ctx.body = {
                error: 1,
                msg: '没有权限'
            }
        }
    }
};

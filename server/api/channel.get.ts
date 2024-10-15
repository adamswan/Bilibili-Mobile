import channel from "@/database/channel";

// 基于文件夹的路由 get /api/channel

// nuxt 通过 defineEventHandler 定义后端接口
//! 注意：这是服务端发的请求，不是浏览器
export default defineEventHandler(() => {
  // 返回的数据可以来自数据库，也可以向其他服务器发请求获取
  return channel;
});

// https://www.cnblogs.com/sea-breeze/p/11310856.html
module.exports = {
  // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  //publicPath: process.env.NODE_ENV === "production" ? "." : "/",
  publicPath: process.env.NODE_ENV === 'production'? '/hello-world/' : '/',

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  //outputDir: "my-app",

  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  //assetsDir: "assets",

  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // 默认值'index.html'
  indexPath: "myIndex.html",

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  //productionSourceMap: false,
}
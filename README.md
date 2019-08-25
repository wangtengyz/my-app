## 在创建react项目时，我们一般用create-react-app脚手架来搭建项目。

    create-react-app对webpack的配置进行了封装并默认隐藏了配置文件。
    当我们需要对webpack的配置进行扩展时，需要执行npm run eject命名将配置文件暴露出来，然后在对配置文件进行扩展。
    这种方式的缺点：
    npm run eject命名不可逆，一旦配置文件暴露后就不可再隐藏
    扩展的配置和create-react-app内建的webpack配置混合在了一起，不利于配置出现问题后的排查。

## 使用react-app-rewired再配置

    [react-app-rewired](https://github.com/facebook/create-react-app是对create-react-app) 进行自定义配置的社区解决方案。它不会直接去修改create-react-app的默认配置，而是在create-react-app配置的基础上进行扩展。

### 使用步骤

1. 安装react-app-rewired

> npm install react-app-rewired@2.0.2-next.0 --save-dev

2. 在项目根目录中创建config-overrides.js文件用于修改默认配置
```
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```
3. 修改 package.json 里的启动配置
```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```
4. 配置文件config-overrides.js

    通过上面3步已经可以扩展webpack配置了，接下来就根据需求去配置即可。下面介绍我使用过的一些常见配置

*   启用ES7的修改器语法（babel 7）
*   css模块化（安装和使用见参考链接）
*   配置别名
*   antd按需加载
*   less模块化和覆盖变量

```
yarn add @babel/plugin-proposal-decorators    //修饰器
yarn add codebandits/react-app-rewire-css-modules sass-loader node-sass    //css、sass模块化
yarn add babel-plugin-import   //antd按需加载
yarn add react-app-rewire-less-modules  //less模块化
yarn add customize-cra react-app-rewired --dev // customize-cra
```
```
const {
    override,
    addDecoratorsLegacy,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias
  } = require("customize-cra");
const path = require("path");

module.exports = override(
    // do stuff with the webpack config...

    //启用ES7的修饰器语法（babel 7）
    addDecoratorsLegacy(),

    // 引入antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
    //配置别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      'pages': path.resolve(__dirname, 'src/pages'),
    }),
    //引入less
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#1DA57A'
      }
    }),
    //   (config) => {
    //     config.module.rules[2].oneOf[5].use.push({
    //         loader: 'sass-resources-loader',
    //         options: {
    //           resources:  path.resolve(__dirname, 'src/assets/styles/common.scss')
    //         }
    //     })
    //     return config
    //   }
)
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


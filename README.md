# 基于Vue cli 2.0 多页面脚手架
Vue多页面配置，开箱即用的脚手架
适用于移动端，后期会拆分为适用于PC and 移动端两部分

## 已有功能

+ [x] 多页面配置 --完成

+ [x] css预处理器 --完成

+ [x] vw && rem布局 --完成

+ [x] typescript支持 --完成

+ [ ] 移动端调试 --未完成

+ [x] mock数据 --未完成

+ [ ] 单元测试 --未完成

+ [ ] 自动化测试 --未完成


## 如何引入共用文件
- `@` 为项目根目录(src目录)
- `#` 为全局公用组件(src/components)
- `^` 为模块目录(src/module/模块)
- `%` 为common目录(src/common)

## 推荐写法
Vuex推荐使用`typescript`编写，保证代码可读性
.vue推荐使用ES6编写，保证灵活

# npm install

https://github.com/chengpeixin/VueMultiPage.git
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
针对在webstorm里面不能hot reload的问题大家可以按如下步骤设置一下就行：

Please try turning 'Safe write' option ( Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)) off
For detailed explanation on how things work, checkout the guide and docs for vue-loader.

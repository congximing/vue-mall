# vue_mall

## 项目构建
```
yarn install
yarn serve #development
yarn build #production
```

See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目目录

```
src
	assets #图标,静态资源
		img
		css #normalize.css 标签初始化
	common #js
		const.js #公用常量
		mixin.js #混入
		until.js #公用工具
	components #公共组件
		common #项目之间,公共组件
		content #业务之间，公共组件
	network #网络请求封装	
	views #视图
	store #数据管理

vue.config.js # 构建此文件，才可以使用npm run serve
```

